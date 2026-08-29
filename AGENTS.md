# Repository build instructions

## Android release ABI policy

- Unless the user explicitly requests another ABI, default to publishing and delivering only the `arm64-v8a` (ARMv8-A) release APK.
- Build distributable releases with the normal `:app:assembleOssRelease` task. Never use `-Pandroid.injected.build.abi=arm64-v8a` for a release artifact because it can add `android:testOnly="true"` and cause `INSTALL_FAILED_TEST_ONLY`.
- After a successful normal release build, select, verify, and deliver only `NekoBox-<version>-arm64-v8a.apk`. Remove other ABI APKs from the release directory unless the user requested them.
- Always rebuild `rust-core` after updating the `third_party/qsocket-tcp` submodule. The tracked `build-env.example.ps1` documents the variables; each computer keeps its own ignored `build-env.local.ps1`. Paths under `H:\Android` belong to the other computer and must not be assumed on this computer.
- Before delivery, verify that `android:testOnly` is absent, the expected release certificate is used, ZIP alignment passes, `native-code` is `arm64-v8a`, and a real `adb install` succeeds when a device is available.
- See `RELEASE_BUILD_NOTES.md` for the full Windows build, signing, compatibility, and installation checklist.
