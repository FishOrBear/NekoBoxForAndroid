# Android 发布包构建与安装检查

本文记录本项目在 Windows 上构建 QSocket/NekoBox 发布包时必须遵守的流程，避免再次生成系统安装器拒绝的 APK。

## 关键问题：不要用 injected ABI 参数构建发布包

不要使用下面的命令构建可分发 APK：

```powershell
gradle :app:assembleOssRelease -Pandroid.injected.build.abi=arm64-v8a
```

`android.injected.build.abi` 是 Android Studio/IDE 使用的注入参数。通过该参数生成的 APK 可能在 Manifest 中带有 `android:testOnly="true"`。这种 APK 即使签名、ZIP 对齐和 ABI 都正确，普通系统安装器仍会显示“安装包异常”，`adb install` 会返回：

```text
INSTALL_FAILED_TEST_ONLY
```

`adb install -t` 虽然可以安装 test-only 包，但不能用于正式发布。

## 正确的 arm64 发布流程

### 每台电脑独立的构建环境

不要在构建脚本中写死某一台电脑的磁盘路径。`H:\Android` 是另一台电脑的环境；当前电脑使用 `C:\Users\Administrator\AppData\Local\Android\Sdk`。

仓库提供 `build-env.example.ps1`。每台电脑复制为 Git 忽略的 `build-env.local.ps1`，分别设置 SDK、NDK、Cargo home 和 Rust target 目录。更新 `third_party/qsocket-tcp` 后，必须先重新构建 Rust native 库：

```powershell
.\build-rust-core.ps1 -Profile release
```

该脚本默认只构建 `arm64-v8a`；只有明确需要其他 ABI 时才通过 `-Abi` 指定。

### 默认 ABI 政策

除非用户明确要求其他架构，本项目默认只发布和交付 `arm64-v8a`（ARMv8-A）APK。

这里的“只构建 armv8a”在发布流程中表示：使用正常的 release 任务完成构建，只保留、验证和交付 arm64 产物；不要使用会把 APK 标记为 test-only 的 IDE injected ABI 参数。构建完成后应从发布目录删除 `armeabi-v7a`、`x86` 和 `x86_64` APK，避免误下载。

正常执行完整 release 构建，不传 injected ABI 参数：

```powershell
gradle :app:assembleOssRelease --offline
```

构建系统会生成多个 ABI 的 APK。发布时只选择：

```text
app/build/outputs/apk/oss/release/NekoBox-<version>-arm64-v8a.apk
```

可以从发布目录删除其他 ABI 的产物，但不能通过 `android.injected.build.abi` 限制正式构建。

## 正式签名

本机使用 Telegram 工程中的正式签名材料：

```text
D:\dev\telegram\TMessagesProj\config\release-key.keystore
D:\dev\telegram\gradle.properties
```

复制 keystore 到仓库根目录的 `release.keystore`，并将 Telegram 属性映射到当前项目被 Git 忽略的 `local.properties`：

```text
RELEASE_STORE_PASSWORD -> KEYSTORE_PASS
RELEASE_KEY_ALIAS      -> ALIAS_NAME
RELEASE_KEY_PASSWORD   -> ALIAS_PASS
```

不要把密码提交到 Git，也不要在日志或终端输出中打印密码。

当前正式证书可用以下摘要识别：

```text
DN: CN=chen, OU=qi, O=qi, L=fujian, ST=fujian, C=cn
SHA-256: a460997b93ce1c5a3ddf49a93c0c9041d62759c71c139bed58d3435192c49e86
```

## 发布前强制检查

假设 `$apk` 指向待发布的 arm64 APK，至少执行以下检查。

确认不是 test-only APK：

```powershell
& $aapt dump xmltree $apk AndroidManifest.xml |
    Select-String 'android:testOnly'
```

正常发布包不应有任何输出。

确认签名有效且证书正确：

```powershell
& $apksigner verify --verbose --print-certs $apk
```

确认 APK 对齐：

```powershell
& $zipalign -c -P 16 -v 4 $apk
```

确认包信息和 ABI：

```powershell
& $aapt dump badging $apk |
    Select-String "^package:|^sdkVersion:|^targetSdkVersion:|^native-code:"
```

arm64 发布包应显示：

```text
native-code: 'arm64-v8a'
```

最终应使用 `adb install` 做一次真实安装验证。不要只依赖 `apksigner` 和 `zipalign`，因为它们不会把 `testOnly` 当成错误：

```powershell
adb install path\to\NekoBox-<version>-arm64-v8a.apk
```

## 16 KB 页面兼容

APK 中的所有 arm64 原生库都应使用至少 `0x4000` 的 ELF LOAD 对齐。使用 NDK 的 `llvm-readelf` 检查：

```powershell
llvm-readelf -lW libgojni.so
llvm-readelf -lW libqsocket_local.so
```

每个 `LOAD` 段末尾都应为 `0x4000`。本次使用 Go/gomobile 重编 `libgojni.so` 时加入：

```text
-ldflags=-s -w -extldflags=-Wl,-z,max-page-size=16384
```

这不是本次“安装包异常”的直接原因；实际设备页面大小为 4096，最终确认的直接原因是 `android:testOnly="true"`。保留 16 KB 对齐是为了兼容新设备。

## 一加设备 ADB offline

一加 15 通过 USB 连接时可能长期显示 `offline`。USB 重连、重启 ADB、撤销授权和重置主机 `adbkey` 都不一定恢复。

可启用手机的“开发者选项 -> 无线调试”，电脑端执行：

```powershell
adb mdns services
adb devices -l
```

当 `_adb-tls-connect._tcp` 设备显示为 `device` 后，使用该无线设备序列号执行安装。若 USB offline 设备与无线设备同时存在，必须通过 `adb -s <wireless-serial> install ...` 明确选择无线设备。

## 本次确认可安装的构建

2026-08-29 在一加 15（Android 16、arm64-v8a）上通过无线 ADB 安装成功：

```text
Package: moe.nb4a
Version: 1.4.2 (230)
Result: Success
```
