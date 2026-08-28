package io.nekohasekai.sagernet.ui

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.EditText
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.preference.Preference
import androidx.preference.PreferenceCategory
import androidx.preference.PreferenceFragmentCompat
import androidx.preference.SwitchPreferenceCompat
import com.google.android.material.appbar.MaterialToolbar
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import io.nekohasekai.sagernet.Key
import io.nekohasekai.sagernet.R
import io.nekohasekai.sagernet.database.DataStore
import io.nekohasekai.sagernet.database.ProfileManager
import io.nekohasekai.sagernet.utils.WifiNodeSwitchManager
import io.nekohasekai.sagernet.widget.ListListener

class NetworkSwitchActivity : ThemedActivity(R.layout.layout_settings_activity) {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        findViewById<MaterialToolbar>(R.id.toolbar).apply {
            setTitle(R.string.network_switch_settings)
            setNavigationIcon(R.drawable.ic_navigation_close)
            setNavigationOnClickListener { finish() }
        }
        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .replace(R.id.settings, NetworkSwitchPreferenceFragment())
                .commit()
        }
    }
}

class NetworkSwitchPreferenceFragment : PreferenceFragmentCompat() {
    private enum class SelectionTarget { WIFI_DEFAULT, CELLULAR, WIFI_RULE }

    private var selectionTarget = SelectionTarget.WIFI_DEFAULT
    private var pendingSsid: String? = null

    private val profilePicker = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode != Activity.RESULT_OK) return@registerForActivityResult
        val profileId = result.data?.getLongExtra(ProfileSelectActivity.EXTRA_PROFILE_ID, 0L) ?: 0L
        if (profileId <= 0L) return@registerForActivityResult
        when (selectionTarget) {
            SelectionTarget.WIFI_DEFAULT ->
                DataStore.configurationStore.putLong(Key.NETWORK_SWITCH_WIFI_DEFAULT, profileId)
            SelectionTarget.CELLULAR ->
                DataStore.configurationStore.putLong(Key.NETWORK_SWITCH_CELLULAR, profileId)
            SelectionTarget.WIFI_RULE -> pendingSsid?.let { ssid ->
                val rules = WifiNodeSwitchManager.wifiRules()
                rules[ssid] = profileId
                WifiNodeSwitchManager.saveWifiRules(rules)
            }
        }
        rebuildScreen()
    }

    private val permissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) {
        addCurrentWifiRule()
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        ViewCompat.setOnApplyWindowInsetsListener(view, ListListener)
    }

    override fun onCreatePreferences(savedInstanceState: Bundle?, rootKey: String?) {
        preferenceManager.preferenceDataStore = DataStore.configurationStore
        rebuildScreen()
    }

    private fun rebuildScreen() {
        val context = requireContext()
        val screen = preferenceManager.createPreferenceScreen(context)
        preferenceScreen = screen

        screen.addPreference(SwitchPreferenceCompat(context).apply {
            key = Key.NETWORK_SWITCH_ENABLED
            setTitle(R.string.network_switch_enabled)
            setSummary(R.string.network_switch_enabled_summary)
            setDefaultValue(false)
        })
        screen.addPreference(SwitchPreferenceCompat(context).apply {
            key = Key.NETWORK_SWITCH_ON_START
            setTitle(R.string.network_switch_on_start)
            setSummary(R.string.network_switch_on_start_summary)
            setDefaultValue(false)
        })

        val defaultsCategory = PreferenceCategory(context).apply {
            setTitle(R.string.network_switch_defaults)
        }
        screen.addPreference(defaultsCategory)
        defaultsCategory.addPreference(profilePreference(
            Key.NETWORK_SWITCH_WIFI_DEFAULT,
            R.string.network_switch_default_wifi,
            SelectionTarget.WIFI_DEFAULT,
        ))
        defaultsCategory.addPreference(profilePreference(
            Key.NETWORK_SWITCH_CELLULAR,
            R.string.network_switch_mobile_profile,
            SelectionTarget.CELLULAR,
        ))

        val wifiRulesCategory = PreferenceCategory(context).apply {
            setTitle(R.string.network_switch_wifi_rules)
        }
        screen.addPreference(wifiRulesCategory)
        WifiNodeSwitchManager.wifiRules().forEach { (ssid, profileId) ->
            wifiRulesCategory.addPreference(Preference(context).apply {
                key = "networkSwitchRule:$ssid"
                title = ssid
                summary = profileName(profileId)
                setOnPreferenceClickListener {
                    showRuleActions(ssid, profileId)
                    true
                }
            })
        }
        wifiRulesCategory.addPreference(Preference(context).apply {
            setTitle(R.string.network_switch_add_current_wifi)
            setSummary(R.string.network_switch_add_current_wifi_summary)
            setOnPreferenceClickListener {
                requestWifiPermissionsOrAdd()
                true
            }
        })
        wifiRulesCategory.addPreference(Preference(context).apply {
            setTitle(R.string.network_switch_add_manual)
            setSummary(R.string.network_switch_add_manual_summary)
            setOnPreferenceClickListener {
                showSsidInput()
                true
            }
        })
    }

    private fun profilePreference(
        key: String,
        titleRes: Int,
        target: SelectionTarget,
    ) = Preference(requireContext()).apply {
        this.key = "$key:selector"
        setTitle(titleRes)
        val profileId = DataStore.configurationStore.getLong(key, 0L)
        summary = profileName(profileId)
        setOnPreferenceClickListener {
            showDefaultActions(key, target, profileId)
            true
        }
    }

    private fun profileName(profileId: Long): String {
        if (profileId <= 0L) return getString(R.string.network_switch_do_not_switch)
        return ProfileManager.getProfile(profileId)?.displayName()
            ?: getString(R.string.network_switch_profile_missing)
    }

    private fun showDefaultActions(key: String, target: SelectionTarget, profileId: Long) {
        MaterialAlertDialogBuilder(requireContext())
            .setTitle(if (profileId > 0L) profileName(profileId) else getString(R.string.select_profile))
            .setItems(arrayOf(
                getString(R.string.select_profile),
                getString(R.string.network_switch_do_not_switch),
            )) { _, which ->
                if (which == 0) launchProfilePicker(target, null, profileId)
                else {
                    DataStore.configurationStore.putLong(key, 0L)
                    rebuildScreen()
                }
            }
            .show()
    }

    private fun showRuleActions(ssid: String, profileId: Long) {
        MaterialAlertDialogBuilder(requireContext())
            .setTitle(ssid)
            .setItems(arrayOf(
                getString(R.string.network_switch_change_profile),
                getString(R.string.network_switch_delete_rule),
            )) { _, which ->
                if (which == 0) launchProfilePicker(SelectionTarget.WIFI_RULE, ssid, profileId)
                else {
                    val rules = WifiNodeSwitchManager.wifiRules()
                    rules.remove(ssid)
                    WifiNodeSwitchManager.saveWifiRules(rules)
                    rebuildScreen()
                }
            }
            .show()
    }

    private fun showSsidInput() {
        val input = EditText(requireContext()).apply {
            hint = getString(R.string.network_switch_ssid_hint)
            inputType = InputType.TYPE_CLASS_TEXT
            setSingleLine(true)
        }
        MaterialAlertDialogBuilder(requireContext())
            .setTitle(R.string.network_switch_add_manual)
            .setView(input)
            .setPositiveButton(android.R.string.ok) { _, _ ->
                val ssid = input.text.toString().trim()
                if (ssid.isNotBlank()) launchProfilePicker(SelectionTarget.WIFI_RULE, ssid, 0L)
            }
            .setNegativeButton(android.R.string.cancel, null)
            .show()
    }

    private fun requestWifiPermissionsOrAdd() {
        val permissions = buildList {
            add(Manifest.permission.ACCESS_FINE_LOCATION)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                add(Manifest.permission.NEARBY_WIFI_DEVICES)
            }
        }.filter {
            ContextCompat.checkSelfPermission(requireContext(), it) != PackageManager.PERMISSION_GRANTED
        }
        if (permissions.isEmpty()) addCurrentWifiRule()
        else permissionLauncher.launch(permissions.toTypedArray())
    }

    private fun addCurrentWifiRule() {
        if (!WifiNodeSwitchManager.isLocationEnabled(requireContext())) {
            Toast.makeText(requireContext(), R.string.network_switch_location_required, Toast.LENGTH_LONG).show()
            return
        }
        val ssid = WifiNodeSwitchManager.currentSsid(requireContext())
        if (ssid == null) {
            Toast.makeText(requireContext(), R.string.network_switch_ssid_unavailable, Toast.LENGTH_LONG).show()
            return
        }
        val profileId = WifiNodeSwitchManager.wifiRules()[ssid] ?: 0L
        launchProfilePicker(SelectionTarget.WIFI_RULE, ssid, profileId)
    }

    private fun launchProfilePicker(target: SelectionTarget, ssid: String?, selectedId: Long) {
        selectionTarget = target
        pendingSsid = ssid
        profilePicker.launch(Intent(requireContext(), ProfileSelectActivity::class.java).apply {
            ProfileManager.getProfile(selectedId)?.let {
                putExtra(ProfileSelectActivity.EXTRA_SELECTED, it)
            }
        })
    }
}
