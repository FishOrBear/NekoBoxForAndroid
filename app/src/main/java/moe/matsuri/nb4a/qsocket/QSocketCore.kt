package moe.matsuri.nb4a.qsocket

import android.content.Context
import io.nekohasekai.sagernet.database.ProxyEntity

/** JNI lifecycle bridge for the bundled QSocket Rust local core. */
object QSocketCore {
    init {
        System.loadLibrary("qsocket_local")
    }

    private external fun start(configPath: String): Boolean
    external fun stop()
    external fun trafficSnapshot(): String?
    external fun isReady(): Boolean

    /** 仅在当前选择的是自动生成的 QSocket 节点时启动 Rust 内核。 */
    @Synchronized
    fun startForProfile(context: Context, profile: ProxyEntity): Boolean {
        if (!QSocketProfiles.isQSocket(profile)) return false
        val config = QSocketProfiles.ensureConfigFiles(context)
        QSocketTls.ensure(context)
        return start(config.absolutePath)
    }

    @Synchronized
    fun shutdown() {
        stop()
    }
}
