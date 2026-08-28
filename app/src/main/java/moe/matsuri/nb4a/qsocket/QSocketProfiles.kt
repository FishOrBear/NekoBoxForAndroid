package moe.matsuri.nb4a.qsocket

import android.content.Context
import io.nekohasekai.sagernet.GroupType
import io.nekohasekai.sagernet.SagerNet
import io.nekohasekai.sagernet.database.DataStore
import io.nekohasekai.sagernet.database.GroupManager
import io.nekohasekai.sagernet.database.ProxyEntity
import io.nekohasekai.sagernet.database.ProxyGroup
import io.nekohasekai.sagernet.database.SagerDatabase
import io.nekohasekai.sagernet.fmt.socks.SOCKSBean
import io.nekohasekai.sagernet.ktx.applyDefaultValues
import org.json.JSONObject
import kotlinx.coroutines.delay
import java.io.File

object QSocketProfiles {
    private const val GROUP_NAME = "QSocket"
    private const val UUID_PREFIX = "qsocket:"
    private const val AUTO_UUID = "qsocket:auto"
    private const val PANEL_ASSET_VERSION = "19e2eb20d476d97abd10"

    fun isQSocket(profile: ProxyEntity): Boolean = profile.uuid.startsWith(UUID_PREFIX)

    fun ensureConfigFiles(context: Context): File {
        val directory = File(context.filesDir, "qsocket").apply { mkdirs() }
        ensurePanelAssets(context, directory)
        val local = File(directory, "local.json")
        val slb = File(directory, "SLBConfig.json")
        if (!slb.exists()) slb.writeText("{}\n")
        if (!local.exists()) {
            local.writeText(
                """{
  "servers": [],
  "slbListen": 39002,
  "slbSocksListen": 3902,
  "slbConfigPath": "SLBConfig.json",
  "slbPanelHttpsPort": 39003,
  "slbPanelHttpPort": 39004
}
"""
            )
        }
        return local
    }

    private fun ensurePanelAssets(context: Context, directory: File) {
        val output = File(directory, "public")
        val marker = File(output, ".version")
        if (marker.takeIf(File::isFile)?.readText()?.trim() == PANEL_ASSET_VERSION) return
        copyAssetDirectory(context, "qsocket-public", output)
        marker.writeText("$PANEL_ASSET_VERSION\n")
    }

    private fun copyAssetDirectory(context: Context, assetPath: String, output: File) {
        output.mkdirs()
        context.assets.list(assetPath).orEmpty().forEach { name ->
            val childAsset = "$assetPath/$name"
            val children = context.assets.list(childAsset).orEmpty()
            if (children.isNotEmpty()) {
                copyAssetDirectory(context, childAsset, File(output, name))
            } else {
                context.assets.open(childAsset).use { input ->
                    File(output, name).outputStream().use(input::copyTo)
                }
            }
        }
    }

    suspend fun synchronize(context: Context) {
        val local = ensureConfigFiles(context)
        QSocketTls.ensure(context)
        val root = runCatching { JSONObject(local.readText()) }.getOrElse { JSONObject() }
        val groupDao = SagerDatabase.groupDao
        val proxyDao = SagerDatabase.proxyDao
        val group = groupDao.allGroups().firstOrNull {
            it.type == GroupType.BASIC && it.name == GROUP_NAME
        } ?: ProxyGroup(
            name = GROUP_NAME,
            type = GroupType.BASIC,
            userOrder = groupDao.nextOrder() ?: 1L,
        ).also { it.id = groupDao.createGroup(it) }

        val wanted = linkedMapOf(AUTO_UUID to ("自动负载均衡" to root.optInt("slbSocksListen", 3902)))
        val servers = root.optJSONArray("servers")
        if (servers != null) {
            for (index in 0 until servers.length()) {
                val server = servers.optJSONObject(index) ?: continue
                if (server.optBoolean("disable") || server.optString("type") == "transport") continue
                val name = server.optString("name").trim()
                val listen = server.optInt("listen")
                val socksPort = 2000 + listen - 39000
                if (name.isNotEmpty() && socksPort in 1..65535) {
                    wanted["qsocket:node:$name"] = name to socksPort
                }
            }
        }

        val existing = proxyDao.getByGroup(group.id).filter(::isQSocket).associateBy { it.uuid }
        existing.filterKeys { it !in wanted }.values.forEach { proxyDao.deleteProxy(it) }
        wanted.entries.forEachIndexed { order, (uuid, item) ->
            val bean = SOCKSBean().apply {
                serverAddress = "127.0.0.1"
                serverPort = item.second
                name = item.first
                protocol = SOCKSBean.PROTOCOL_SOCKS5
                applyDefaultValues()
            }
            val old = existing[uuid]
            if (old == null) {
                proxyDao.addProxy(ProxyEntity(groupId = group.id, uuid = uuid, userOrder = order.toLong()).apply {
                    putBean(bean)
                })
            } else {
                old.userOrder = order.toLong()
                old.putBean(bean)
                proxyDao.updateProxy(old)
            }
        }
        GroupManager.postReload(group.id)
    }

    suspend fun watch(context: Context) {
        val directory = File(context.filesDir, "qsocket")
        var version = configVersion(directory)
        while (true) {
            delay(1_000)
            val current = configVersion(directory)
            if (current == version) continue
            delay(500)
            version = configVersion(directory)
            synchronize(context)
            val selected = SagerDatabase.proxyDao.getById(DataStore.selectedProxy)
            if (DataStore.serviceState.started && selected?.let(::isQSocket) == true) {
                SagerNet.reloadService()
            }
        }
    }

    private fun configVersion(directory: File): Long = listOf(
        File(directory, "local.json"),
        File(directory, "SLBConfig.json"),
    ).fold(0L) { value, file -> value xor file.lastModified() xor file.length() }
}
