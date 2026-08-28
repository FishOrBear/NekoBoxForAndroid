# QSocket Android Rust 核心

NekoBox 不再维护另一套 QSocket Rust 实现。协议、连接池、SLB 和移动端连接策略统一来自 `third_party/qsocket-tcp` Git 子模块，`rust-core` 目录只保留 Android JNI 包装层。

## 初始化源码

首次克隆仓库后执行：

```powershell
git submodule update --init --recursive
```

## 构建

在仓库根目录执行：

```powershell
.\build-rust-core.ps1 -Profile release
```

脚本会为 NekoBox 支持的四种 Android ABI 构建 `libqsocket_local.so`，并复制到对应的 `app/src/main/jniLibs` 目录。

## 运行

应用首次启动会自动创建 `QSocket` 分组和“自动负载均衡”节点。保存配置并重新打开应用后，分组会同步显示 `local.json` 中所有启用的 Local 节点。

只有选择这些 QSocket 节点时才会启动 Rust 内核；普通 NekoBox 节点不会启动它。配置保存在：

```text
files/qsocket/local.json
```

配置格式与 `qsocket-tcp/Config/local.json` 一致。删除该文件后，NekoBox 保持原有行为，不启动 QSocket；停止 NekoBox 后台服务也会停止 Rust 运行时并释放监听端口。

Android JNI 入口会强制启用移动端策略，即使配置文件来自桌面端，也会使用冷启动、按需扩容、最多 8 条 Proxy 和较慢轮换等移动端参数。

连接任意 QSocket 节点后，可访问 `https://qs.qcad.cc/config` 编辑配置；首次没有 TLS 证书时使用 `http://qs.qcad.cc/config`。配置页只允许编辑 `local.json` 和 `SLBConfig.json`，保存前会校验 JSON，并保留 `.bak` 备份。移动模式下面板仅监听回环地址。

移动端策略和核心功能应在 `qsocket-tcp/rust-local` 中修改；NekoBox 侧只维护 JNI 生命周期、配置路径和 Android 日志桥接。
