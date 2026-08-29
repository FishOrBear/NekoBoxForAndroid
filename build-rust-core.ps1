param(
    [ValidateSet("debug", "release")]
    [string]$Profile = "release",
    [ValidateSet("arm64-v8a", "armeabi-v7a", "x86", "x86_64")]
    [string[]]$Abi = @("arm64-v8a")
)

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot
$BuildAndroidSdkRoot = if ($env:ANDROID_SDK_ROOT) {
    $env:ANDROID_SDK_ROOT
} elseif ($env:ANDROID_HOME) {
    $env:ANDROID_HOME
} else {
    Join-Path $env:LOCALAPPDATA "Android\Sdk"
}
$BuildAndroidNdkRoot = $env:ANDROID_NDK_HOME
$BuildCargoHome = $env:CARGO_HOME
$BuildCargoTargetDir = Join-Path $projectRoot ".runtime\rust-target"

# Per-machine paths belong here and are intentionally ignored by Git.
$localEnvironment = Join-Path $projectRoot "build-env.local.ps1"
if (Test-Path -LiteralPath $localEnvironment) {
    . $localEnvironment
}

$sdkRoot = $BuildAndroidSdkRoot
$ndkRoot = $BuildAndroidNdkRoot
$cargoHome = $BuildCargoHome
$targetDir = $BuildCargoTargetDir
$jniRoot = Join-Path $projectRoot "app\src\main\jniLibs"
$qsocketCore = Join-Path $projectRoot "third_party\qsocket-tcp\rust-local\Cargo.toml"

if (-not (Test-Path -LiteralPath $qsocketCore)) {
    throw "QSocket submodule is missing. Run: git submodule update --init --recursive"
}
if (-not (Test-Path -LiteralPath $sdkRoot)) {
    throw "Android SDK not found at '$sdkRoot'. Copy build-env.example.ps1 to build-env.local.ps1 and configure this computer."
}
if (-not $ndkRoot -or -not (Test-Path -LiteralPath $ndkRoot)) {
    throw "Android NDK not found at '$ndkRoot'. Configure BuildAndroidNdkRoot in build-env.local.ps1."
}

$env:ANDROID_HOME = $sdkRoot
$env:ANDROID_NDK_HOME = $ndkRoot
$env:CARGO_TARGET_DIR = $targetDir
if ($cargoHome) {
    $env:CARGO_HOME = $cargoHome
    $env:Path = (Join-Path $cargoHome "bin") + ";" + $env:Path
}
$env:CARGO_HTTP_TIMEOUT = "600"
$env:CARGO_HTTP_LOW_SPEED_LIMIT = "1"
$env:CARGO_NET_RETRY = "10"

$targetMap = @{
    "arm64-v8a" = "aarch64-linux-android"
    "armeabi-v7a" = "armv7-linux-androideabi"
    "x86" = "i686-linux-android"
    "x86_64" = "x86_64-linux-android"
}

foreach ($item in $Abi) {
    rustup target add $targetMap[$item]
}

if (-not (Get-Command cargo-ndk -ErrorAction SilentlyContinue)) {
    cargo install cargo-ndk --locked
}

$cargoArgs = @("ndk", "--platform", "21")
foreach ($item in $Abi) {
    $cargoArgs += @("-t", $item)
}
$cargoArgs += @("-o", $jniRoot, "build")
if ($Profile -eq "release") {
    $cargoArgs += "--release"
}

Push-Location (Join-Path $projectRoot "rust-core")
try {
    & cargo @cargoArgs
    if ($LASTEXITCODE -ne 0) { throw "cargo-ndk failed with exit code $LASTEXITCODE" }
} finally {
    Pop-Location
}
