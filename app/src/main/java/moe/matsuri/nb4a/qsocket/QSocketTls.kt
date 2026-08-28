package moe.matsuri.nb4a.qsocket

import android.content.Context
import io.nekohasekai.sagernet.ktx.Logs
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.security.KeyFactory
import java.security.PrivateKey
import java.security.Signature
import java.security.cert.CertificateFactory
import java.security.cert.X509Certificate
import java.security.spec.PKCS8EncodedKeySpec
import java.util.Base64
import java.util.concurrent.TimeUnit

object QSocketTls {
    private const val DOWNLOAD_URL = "https://ct.qcad.cc:5443/ssl"
    private const val HOST_NAME = "qs.qcad.cc"
    private val refreshInterval = TimeUnit.DAYS.toMillis(7)
    private val client = OkHttpClient.Builder()
        .connectTimeout(10, TimeUnit.SECONDS)
        .readTimeout(15, TimeUnit.SECONDS)
        .build()

    fun ensure(context: Context) {
        runCatching {
            val directory = File(context.filesDir, "qsocket/ssl").apply { mkdirs() }
            val certificateFile = File(directory, "key.cer")
            val keyFile = File(directory, "key.key")
            val currentAge = System.currentTimeMillis() - minOf(
                certificateFile.lastModified(),
                keyFile.lastModified(),
            )
            if (certificateFile.isFile && keyFile.isFile && currentAge < refreshInterval) {
                validate(certificateFile.readText(), keyFile.readText())
                return
            }

            val request = Request.Builder()
                .url(DOWNLOAD_URL)
                .post(
                    JSONObject().put("passwd", "whoisyourdaddyxx").toString()
                        .toRequestBody("application/json".toMediaType())
                )
                .build()
            val responseText = client.newCall(request).execute().use { response ->
                check(response.isSuccessful) { "证书服务返回 HTTP ${response.code}" }
                response.body?.string() ?: error("证书服务返回空内容")
            }
            val response = JSONObject(responseText)
            val certificate = response.getString("cer")
            val key = response.getString("key")
            validate(certificate, key)
            replace(certificateFile, certificate)
            replace(keyFile, key)
        }.onFailure { Logs.w(it) }
    }

    private fun validate(certificatePem: String, keyPem: String) {
        val certificates = CertificateFactory.getInstance("X.509")
            .generateCertificates(ByteArrayInputStream(certificatePem.toByteArray()))
            .map { it as X509Certificate }
        val certificate = certificates.firstOrNull() ?: error("证书内容为空")
        certificate.checkValidity()
        check(matchesHost(certificate, HOST_NAME)) { "证书不包含 $HOST_NAME" }
        val privateKey = parsePrivateKey(keyPem, certificate)
        check(keyMatches(certificate, privateKey)) { "证书与私钥不匹配" }
    }

    private fun matchesHost(certificate: X509Certificate, host: String): Boolean {
        return certificate.subjectAlternativeNames.orEmpty().any { item ->
            item.size >= 2 && item[0] == 2 && dnsMatches(item[1] as? String ?: return@any false, host)
        }
    }

    private fun dnsMatches(pattern: String, host: String): Boolean {
        val expected = pattern.lowercase()
        val actual = host.lowercase()
        return expected == actual ||
            (expected.startsWith("*.") && actual.endsWith(expected.drop(1)) &&
                actual.count { it == '.' } == expected.count { it == '.' })
    }

    private fun parsePrivateKey(pem: String, certificate: X509Certificate): PrivateKey {
        val encoded = pem.lineSequence()
            .filterNot { it.startsWith("---") }
            .joinToString("")
        var bytes = Base64.getDecoder().decode(encoded)
        if (pem.contains("BEGIN EC PRIVATE KEY")) {
            val algorithmIdentifier = firstElement(certificate.publicKey.encoded)
            bytes = derSequence(derIntegerZero(), algorithmIdentifier, derOctetString(bytes))
        }
        return KeyFactory.getInstance(certificate.publicKey.algorithm)
            .generatePrivate(PKCS8EncodedKeySpec(bytes))
    }

    private fun firstElement(sequence: ByteArray): ByteArray {
        check(sequence.firstOrNull() == 0x30.toByte()) { "公钥 ASN.1 格式无效" }
        val (_, contentOffset) = derLength(sequence, 1)
        val (length, valueOffset) = derLength(sequence, contentOffset + 1)
        return sequence.copyOfRange(contentOffset, valueOffset + length)
    }

    private fun derLength(bytes: ByteArray, offset: Int): Pair<Int, Int> {
        val first = bytes[offset].toInt() and 0xff
        if (first < 0x80) return first to (offset + 1)
        val count = first and 0x7f
        check(count in 1..4 && offset + count < bytes.size) { "ASN.1 长度无效" }
        var length = 0
        repeat(count) { length = (length shl 8) or (bytes[offset + 1 + it].toInt() and 0xff) }
        return length to (offset + 1 + count)
    }

    private fun derSequence(vararg values: ByteArray): ByteArray =
        derValue(0x30, values.fold(ByteArray(0)) { output, value -> output + value })

    private fun derIntegerZero(): ByteArray = byteArrayOf(0x02, 0x01, 0x00)

    private fun derOctetString(value: ByteArray): ByteArray = derValue(0x04, value)

    private fun derValue(tag: Int, value: ByteArray): ByteArray = ByteArrayOutputStream().use {
        it.write(tag)
        writeDerLength(it, value.size)
        it.write(value)
        it.toByteArray()
    }

    private fun writeDerLength(output: ByteArrayOutputStream, length: Int) {
        if (length < 0x80) {
            output.write(length)
            return
        }
        val bytes = byteArrayOf(
            (length ushr 24).toByte(), (length ushr 16).toByte(),
            (length ushr 8).toByte(), length.toByte(),
        ).dropWhile { it == 0.toByte() }
        output.write(0x80 or bytes.size)
        bytes.forEach { output.write(it.toInt() and 0xff) }
    }

    private fun keyMatches(certificate: X509Certificate, privateKey: PrivateKey): Boolean {
        val algorithm = when (certificate.publicKey.algorithm.uppercase()) {
            "RSA" -> "SHA256withRSA"
            "EC", "ECDSA" -> "SHA256withECDSA"
            else -> error("不支持的证书算法：${certificate.publicKey.algorithm}")
        }
        val sample = "qsocket-tls-check".toByteArray()
        val signature = Signature.getInstance(algorithm).apply {
            initSign(privateKey)
            update(sample)
        }.sign()
        return Signature.getInstance(algorithm).run {
            initVerify(certificate.publicKey)
            update(sample)
            verify(signature)
        }
    }

    private fun replace(target: File, content: String) {
        val temporary = File(target.parentFile, "${target.name}.new")
        temporary.outputStream().use { output ->
            output.write(content.toByteArray())
            output.flush()
            output.fd.sync()
        }
        if (target.isFile) target.copyTo(File(target.parentFile, "${target.name}.bak"), overwrite = true)
        check(temporary.renameTo(target)) { "替换 ${target.name} 失败" }
    }
}
