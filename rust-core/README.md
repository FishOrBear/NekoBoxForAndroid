# QSocket Android JNI wrapper

此目录只保留 Android JNI 与构建入口，不再维护 QSocket 协议、连接池或 SLB 的副本。

核心实现来自 Git 子模块：

```text
third_party/qsocket-tcp/rust-local
```

首次构建前初始化子模块：

```text
git submodule update --init --recursive
```

然后在仓库根目录运行：

```text
.\build-rust-core.ps1
```

该命令默认仅构建 `arm64-v8a`。机器相关路径放在 Git 忽略的 `build-env.local.ps1`，可从仓库根目录的 `build-env.example.ps1` 复制；更新子模块后必须重新构建 native 库。

移动端策略应在核心仓库的 `rust-local` 中修改；本目录仅负责 JNI 生命周期、配置路径和 Android 日志桥接。
