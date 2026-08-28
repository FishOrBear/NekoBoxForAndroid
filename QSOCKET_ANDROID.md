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

后台服务仅在应用私有目录存在以下配置时启动 QSocket：

```text
files/qsocket/local.json
```

配置格式与 `qsocket-tcp/Config/local.json` 一致。删除该文件后，NekoBox 保持原有行为，不启动 QSocket；停止 NekoBox 后台服务也会停止 Rust 运行时并释放监听端口。

Android JNI 入口会强制启用移动端策略，即使配置文件来自桌面端，也会使用冷启动、按需扩容、最多 8 条 Proxy 和较慢轮换等移动端参数。

移动端策略和核心功能应在 `qsocket-tcp/rust-local` 中修改；NekoBox 侧只维护 JNI 生命周期、配置路径和 Android 日志桥接。
