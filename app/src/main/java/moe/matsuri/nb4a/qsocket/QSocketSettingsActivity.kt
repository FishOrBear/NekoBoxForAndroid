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

/** Shared mobile-core settings for every generated QSocket entry. */
class QSocketSettingsActivity : AppCompatActivity() {
    private lateinit var maxProxies: EditText
    private lateinit var idleSeconds: EditText
    private lateinit var rotationSeconds: EditText
    private lateinit var slbAllowLan: SwitchCompat
    private lateinit var dashboardAllowLan: SwitchCompat

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
        maxProxies = numberField(content, "最大 Proxy 连接数", root.optInt("mobileMaxProxies", 8))
        idleSeconds = numberField(content, "空闲回收时间（秒）", root.optInt("mobileIdleTimeoutSeconds", 45))
        rotationSeconds = numberField(content, "周期轮换时间（秒）", root.optInt("mobileRotationIntervalSeconds", 300))
        slbAllowLan = switchField(content, "SLB 允许局域网连接", root.optBoolean("slbAllowLan", false))
        dashboardAllowLan = switchField(content, "调试面板允许局域网连接", root.optBoolean("dashboardAllowLan", false))
        content.addView(TextView(this).apply {
            text = "局域网开关关闭时仅监听 127.0.0.1；开启后监听 0.0.0.0。保存会触发 QSocket 内核重载。"
            setPadding(0, 24, 0, 24)
        })
        content.addView(Button(this).apply {
            text = "保存"
            setOnClickListener { save(root) }
        })
        setContentView(ScrollView(this).apply { addView(content) })
    }

    private fun numberField(parent: LinearLayout, label: String, value: Int): EditText {
        parent.addView(TextView(this).apply { text = label })
        return EditText(this).apply {
            inputType = InputType.TYPE_CLASS_NUMBER
            setText(value.toString())
            parent.addView(this, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        }
    }

    private fun switchField(parent: LinearLayout, label: String, checked: Boolean) =
        SwitchCompat(this).apply {
            text = label
            isChecked = checked
            parent.addView(this, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        }

    private fun save(root: JSONObject) {
        val max = maxProxies.text.toString().toIntOrNull()?.coerceIn(1, 64) ?: 8
        val idle = idleSeconds.text.toString().toIntOrNull()?.coerceIn(5, 3600) ?: 45
        val rotation = rotationSeconds.text.toString().toIntOrNull()?.coerceIn(30, 86400) ?: 300
        root.put("mobileMaxProxies", max)
        root.put("mobileIdleTimeoutSeconds", idle)
        root.put("mobileRotationIntervalSeconds", rotation)
        root.put("slbAllowLan", slbAllowLan.isChecked)
        root.put("dashboardAllowLan", dashboardAllowLan.isChecked)
        QSocketProfiles.ensureConfigFiles(this).writeText(root.toString(2) + "\n")
        Toast.makeText(this, "QSocket 设置已保存", Toast.LENGTH_SHORT).show()
        finish()
    }

    override fun onSupportNavigateUp(): Boolean {
        finish()
        return true
    }
}
