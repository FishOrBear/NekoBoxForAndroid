package moe.matsuri.nb4a.qsocket

import android.content.Context
import java.io.File

/** JNI lifecycle bridge for the bundled QSocket Rust local core. */
object QSocketCore {
    init {
        System.loadLibrary("qsocket_local")
    }

    private external fun start(configPath: String): Boolean
    external fun stop()
    external fun trafficSnapshot(): String?

    /**
     * Starts QSocket when files/qsocket/local.json exists. This keeps ordinary
     * NekoBox profiles unchanged while allowing a provisioned QSocket config to
     * participate in the same background-service lifecycle.
     */
    fun startIfConfigured(context: Context): Boolean {
        val config = File(context.filesDir, "qsocket/local.json")
        return config.isFile && start(config.absolutePath)
    }
}
