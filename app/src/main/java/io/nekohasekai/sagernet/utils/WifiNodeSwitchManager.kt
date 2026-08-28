package io.nekohasekai.sagernet.utils

import android.Manifest
import android.annotation.SuppressLint
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.location.LocationManager
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import android.net.wifi.WifiInfo
import android.net.wifi.WifiManager
import android.os.Build
import android.os.Handler
import android.os.Looper
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import io.nekohasekai.sagernet.Key
import io.nekohasekai.sagernet.R
import io.nekohasekai.sagernet.SagerNet
import io.nekohasekai.sagernet.database.DataStore
import io.nekohasekai.sagernet.database.ProfileManager
import io.nekohasekai.sagernet.database.SagerDatabase
import io.nekohasekai.sagernet.ktx.Logs
import io.nekohasekai.sagernet.ktx.runOnDefaultDispatcher
import org.json.JSONObject

/** Applies SSID/mobile profile mappings through NekoBox's own service reload path. */
object WifiNodeSwitchManager {
    private const val CHANNEL_ID = "network-switch"
    private const val NOTIFICATION_ID = 20260827
    private const val DEBOUNCE_MS = 1200L

    enum class Transport { WIFI, CELLULAR, OTHER }
    data class Snapshot(val network: Network, val transport: Transport, val ssid: String?)

    private val handler = Handler(Looper.getMainLooper())
    private var lastSnapshot: Snapshot? = null
    private var pending: Runnable? = null
    private var receiverContext: Context? = null

    private val wifiReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent?) {
            if (intent?.action == WifiManager.NETWORK_STATE_CHANGED_ACTION) {
                // activeNetwork may be the app's VPN. Re-read the last known physical network;
                // DefaultNetworkListener is authoritative for actual network replacement.
                lastSnapshot?.network?.let { schedule(context.applicationContext, it) }
            }
        }
    }

    fun isEnabled(): Boolean =
        DataStore.configurationStore.getBoolean(Key.NETWORK_SWITCH_ENABLED, false)

    fun isSwitchOnStartEnabled(): Boolean =
        DataStore.configurationStore.getBoolean(Key.NETWORK_SWITCH_ON_START, false)

    fun wifiRules(): LinkedHashMap<String, Long> {
        val result = linkedMapOf<String, Long>()
        val raw = DataStore.configurationStore.getString(Key.NETWORK_SWITCH_WIFI_RULES).orEmpty()
        if (raw.isBlank()) return result
        return try {
            val json = JSONObject(raw)
            json.keys().forEach { ssid ->
                val profileId = json.optLong(ssid, 0L)
                if (ssid.isNotBlank() && profileId > 0L) result[ssid] = profileId
            }
            result
        } catch (e: Exception) {
            Logs.w(e)
            result
        }
    }

    fun saveWifiRules(rules: Map<String, Long>) {
        val json = JSONObject()
        rules.forEach { (ssid, profileId) ->
            if (ssid.isNotBlank() && profileId > 0L) json.put(ssid, profileId)
        }
        DataStore.configurationStore.putString(Key.NETWORK_SWITCH_WIFI_RULES, json.toString())
    }

    fun start(context: Context) {
        if (receiverContext != null) return
        val appContext = context.applicationContext
        try {
            ContextCompat.registerReceiver(
                appContext,
                wifiReceiver,
                IntentFilter(WifiManager.NETWORK_STATE_CHANGED_ACTION),
                ContextCompat.RECEIVER_NOT_EXPORTED,
            )
            receiverContext = appContext
        } catch (e: Exception) {
            Logs.w(e)
        }
    }

    fun stop() {
        pending?.let(handler::removeCallbacks)
        pending = null
        lastSnapshot = null
        receiverContext?.let { context ->
            try {
                context.unregisterReceiver(wifiReceiver)
            } catch (e: Exception) {
                Logs.w(e)
            }
        }
        receiverContext = null
    }

    /** Called before BaseService reads selectedProxy, so startup never needs a second restart. */
    fun applyStartupRule(context: Context) {
        if (!isEnabled() || !isSwitchOnStartEnabled()) return
        val snapshot = resolveSnapshot(context, activeNetwork(context)) ?: return
        lastSnapshot = snapshot
        selectTarget(context, snapshot, reload = false)
    }

    fun onNetworkChanged(context: Context, network: Network?) {
        network?.let { schedule(context.applicationContext, it) }
    }

    private fun schedule(context: Context, network: Network?) {
        pending?.let(handler::removeCallbacks)
        pending = Runnable {
            pending = null
            val snapshot = resolveSnapshot(context, network ?: return@Runnable) ?: return@Runnable
            val previous = lastSnapshot
            lastSnapshot = snapshot
            // Capability/SSID updates are frequently emitted while the VPN is reloaded. They do
            // not mean that the user changed Wi-Fi, and must never override a manual node choice.
            val physicalNetworkChanged = previous != null &&
                (previous.network != snapshot.network || previous.transport != snapshot.transport)
            if (!physicalNetworkChanged || !isEnabled()) return@Runnable
            selectTarget(context, snapshot, reload = true)
        }.also { handler.postDelayed(it, DEBOUNCE_MS) }
    }

    private fun selectTarget(context: Context, snapshot: Snapshot, reload: Boolean) {
        val targetId = when (snapshot.transport) {
            Transport.WIFI -> {
                wifiRules()[snapshot.ssid]
                    ?: DataStore.configurationStore.getLong(Key.NETWORK_SWITCH_WIFI_DEFAULT, 0L)
            }
            Transport.CELLULAR ->
                DataStore.configurationStore.getLong(Key.NETWORK_SWITCH_CELLULAR, 0L)
            Transport.OTHER -> 0L
        }
        if (targetId <= 0L || targetId == DataStore.selectedProxy) return
        val target = SagerDatabase.proxyDao.getById(targetId) ?: return
        val previousId = DataStore.selectedProxy
        DataStore.selectedProxy = targetId
        runOnDefaultDispatcher {
            ProfileManager.postUpdate(previousId)
            ProfileManager.postUpdate(targetId)
            DataStore.baseService?.data?.binder?.broadcast { callback ->
                callback.cbProfileSelectionChanged(previousId, targetId)
            }
        }

        val networkName = when (snapshot.transport) {
            Transport.WIFI -> context.getString(R.string.network_switch_wifi_name, snapshot.ssid
                ?: context.getString(R.string.network_switch_ssid_unknown))
            Transport.CELLULAR -> context.getString(R.string.network_switch_mobile)
            Transport.OTHER -> context.getString(R.string.network_switch_other)
        }
        notifySwitch(context, networkName, target.displayName())
        if (reload) SagerNet.reloadService()
    }

    @SuppressLint("MissingPermission")
    fun currentSsid(context: Context): String? {
        val snapshot = resolveSnapshot(context, activeNetwork(context))
        return snapshot?.takeIf { it.transport == Transport.WIFI }?.ssid
    }

    fun isLocationEnabled(context: Context): Boolean {
        val manager = context.getSystemService(Context.LOCATION_SERVICE) as? LocationManager
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) manager?.isLocationEnabled == true
        else true
    }

    private fun activeNetwork(context: Context): Network? =
        (context.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager)?.activeNetwork

    @SuppressLint("MissingPermission")
    private fun resolveSnapshot(context: Context, network: Network?): Snapshot? {
        val connectivity = context.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager
            ?: return null
        val active = network ?: connectivity.activeNetwork ?: return null
        val capabilities = connectivity.getNetworkCapabilities(active) ?: return null
        val transport = when {
            capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) -> Transport.WIFI
            capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) -> Transport.CELLULAR
            else -> Transport.OTHER
        }
        if (transport != Transport.WIFI) return Snapshot(active, transport, null)

        val fromCapabilities = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            (capabilities.transportInfo as? WifiInfo)?.ssid
        } else null
        val wifiManager = context.applicationContext
            .getSystemService(Context.WIFI_SERVICE) as? WifiManager
        val ssid = normalizeSsid(fromCapabilities)
            ?: normalizeSsid(wifiManager?.connectionInfo?.ssid)
        return Snapshot(active, transport, ssid)
    }

    private fun normalizeSsid(value: String?): String? = value
        ?.removeSurrounding("\"")
        ?.trim()
        ?.takeIf { it.isNotBlank() && !it.equals(WifiManager.UNKNOWN_SSID, true) }

    @SuppressLint("MissingPermission")
    private fun notifySwitch(context: Context, networkName: String, profileName: String) {
        val manager = context.getSystemService(NotificationManager::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            manager.createNotificationChannel(
                NotificationChannel(
                    CHANNEL_ID,
                    context.getString(R.string.network_switch_notification_channel),
                    NotificationManager.IMPORTANCE_HIGH,
                )
            )
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS) !=
            PackageManager.PERMISSION_GRANTED
        ) return
        NotificationManagerCompat.from(context).notify(
            NOTIFICATION_ID,
            NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_notification_enhanced_encryption)
                .setContentTitle(context.getString(R.string.network_switch_notification_title))
                .setContentText(context.getString(R.string.network_switch_notification_text, networkName, profileName))
                .setStyle(NotificationCompat.BigTextStyle().bigText(
                    context.getString(R.string.network_switch_notification_text, networkName, profileName)
                ))
                .setAutoCancel(true)
                .build()
        )
    }
}
