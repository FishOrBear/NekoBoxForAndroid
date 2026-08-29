package moe.matsuri.nb4a.qsocket

import android.os.Bundle
import android.text.InputType
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.SwitchCompat
import org.json.JSONObject
import java.net.Inet4Address
import java.net.NetworkInterface

/** Shared mobile-core settings for every generated QSocket entry. */
class QSocketSettingsActivity : AppCompatActivity() {
    private lateinit var coldStartProxies: EditText
    private lateinit var maxProxies: EditText
    private lateinit var idleSeconds: EditText
    private lateinit var rotationSeconds: EditText
    private lateinit var frpEnabled: SwitchCompat
    private lateinit var slbAllowLan: SwitchCompat
    private lateinit var dashboardAllowLan: SwitchCompat
    private lateinit var lanSummary: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        title = "QSocket 设置"
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        val root = JSONObject(QSocketProfiles.ensureConfigFiles(this).readText())
        val content = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            val padding = (20 * resources.displayMetrics.density).toInt()
            setPadding(padding, padding, padding, padding)
        }

        section(content, "连接池")
        coldStartProxies = numberField(
            content,
            "冷启动 Proxy 数量（每节点，0 = 按需建立）",
            root.optInt("mobileColdStartProxies", 0),
        )
        maxProxies = numberField(
            content,
            "最大 Proxy 数量（每节点）",
            root.optInt("mobileMaxProxies", 8),
        )
        idleSeconds = numberField(
            content,
            "空闲回收时间（秒）",
            root.optInt("mobileIdleTimeoutSeconds", 45),
        )
        rotationSeconds = numberField(
            content,
            "周期轮换时间（秒）",
            root.optInt("mobileRotationIntervalSeconds", 300),
        )
        frpEnabled = switchField(content, "启用 FRP", root.optBoolean("frp", true))

        section(content, "局域网访问")
        slbAllowLan = switchField(
            content,
            "SLB 允许局域网连接",
            root.optBoolean("slbAllowLan", false),
        )
        dashboardAllowLan = switchField(
            content,
            "面板允许局域网连接",
            root.optBoolean("dashboardAllowLan", false),
        )
        lanSummary = TextView(this).apply { setPadding(0, 16, 0, 24) }
        content.addView(lanSummary)
        slbAllowLan.setOnCheckedChangeListener { _, _ -> updateLanSummary(root) }
        dashboardAllowLan.setOnCheckedChangeListener { _, _ -> updateLanSummary(root) }
        updateLanSummary(root)

        content.addView(TextView(this).apply {
            text = "保存后会自动重载 QSocket 内核。冷启动数量大于 0 会为每个启用节点预热连接；空闲达到回收时间后仍会释放。"
            setPadding(0, 8, 0, 24)
        })
        content.addView(Button(this).apply {
            text = "保存"
            setOnClickListener { save(root) }
        })
        setContentView(ScrollView(this).apply { addView(content) })
    }

    private fun section(parent: LinearLayout, title: String) {
        parent.addView(TextView(this).apply {
            text = title
            textSize = 18f
            setPadding(0, 20, 0, 12)
        })
    }

    private fun numberField(parent: LinearLayout, label: String, value: Int): EditText {
        parent.addView(TextView(this).apply { text = label })
        return EditText(this).apply {
            inputType = InputType.TYPE_CLASS_NUMBER
            setText(value.toString())
            parent.addView(
                this,
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
            )
        }
    }

    private fun switchField(parent: LinearLayout, label: String, checked: Boolean) =
        SwitchCompat(this).apply {
            text = label
            isChecked = checked
            parent.addView(
                this,
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
            )
        }

    private fun updateLanSummary(root: JSONObject) {
        val addresses = localIpv4Addresses()
        val addressText = addresses.ifEmpty { listOf("未检测到") }.joinToString("、")
        val details = mutableListOf("局域网 IPv4：$addressText")
        if (slbAllowLan.isChecked && addresses.isNotEmpty()) {
            val port = root.optInt("slbSocksListen", 3902)
            details += "SOCKS5：${addresses.first()}:$port"
        }
        if (dashboardAllowLan.isChecked && addresses.isNotEmpty()) {
            val address = addresses.first()
            details += "运行面板：https://$address:${root.optInt("slbPanelHttpsPort", 39003)}/"
            details += "配置入口：http://$address:${root.optInt("slbPanelHttpPort", 39004)}/config"
            details += "调试面板：http://$address:${root.optInt("connectionDashboardPort", 39006)}/"
        }
        if (!slbAllowLan.isChecked && !dashboardAllowLan.isChecked) {
            details += "当前仅允许本机 127.0.0.1 访问"
        }
        lanSummary.text = details.joinToString("\n")
    }

    private fun localIpv4Addresses(): List<String> {
        val interfaces = NetworkInterface.getNetworkInterfaces()?.toList().orEmpty()
            .filter { network ->
                runCatching {
                    network.isUp && !network.isLoopback &&
                        !network.name.startsWith("tun") &&
                        !network.name.startsWith("dummy")
                }.getOrDefault(false)
            }
            .sortedBy { network ->
                if (network.name.startsWith("wlan") || network.name.startsWith("eth")) 0 else 1
            }
        return interfaces.flatMap { it.inetAddresses.toList() }.mapNotNull { address ->
            (address as? Inet4Address)
                ?.takeIf { !it.isLoopbackAddress && it.isSiteLocalAddress }
                ?.hostAddress
        }.distinct()
    }

    private fun save(root: JSONObject) {
        val max = maxProxies.text.toString().toIntOrNull()?.coerceIn(1, 64) ?: 8
        val coldStart = coldStartProxies.text.toString().toIntOrNull()?.coerceIn(0, max) ?: 0
        val idle = idleSeconds.text.toString().toIntOrNull()?.coerceIn(5, 3600) ?: 45
        val rotation = rotationSeconds.text.toString().toIntOrNull()?.coerceIn(30, 86400) ?: 300
        val listenerChanged = root.optBoolean("slbAllowLan", false) != slbAllowLan.isChecked ||
            root.optBoolean("dashboardAllowLan", false) != dashboardAllowLan.isChecked
        root.put("mobileColdStartProxies", coldStart)
        root.put("mobileMaxProxies", max)
        root.put("mobileIdleTimeoutSeconds", idle)
        root.put("mobileRotationIntervalSeconds", rotation)
        root.put("frp", frpEnabled.isChecked)
        root.put("slbAllowLan", slbAllowLan.isChecked)
        root.put("dashboardAllowLan", dashboardAllowLan.isChecked)
        QSocketProfiles.ensureConfigFiles(this).writeText(root.toString(2) + "\n")
        Toast.makeText(
            this,
            if (listenerChanged) {
                "运行参数已热更新；局域网监听开关将在下次启动内核时生效"
            } else {
                "QSocket 设置已热更新"
            },
            Toast.LENGTH_LONG,
        ).show()
        finish()
    }

    override fun onSupportNavigateUp(): Boolean {
        finish()
        return true
    }
}
