param(
    [ValidateSet("debug", "release")]
    [string]$Profile = "release"
)

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot
$sdkRoot = "H:\Android\sdk"
$ndkRoot = Join-Path $sdkRoot "ndk\25.0.8775105"
$cargoHome = "H:\Android\cargo"
$targetDir = "H:\Android\rust-target\nekobox"
$jniRoot = Join-Path $projectRoot "app\src\main\jniLibs"
$qsocketCore = Join-Path $projectRoot "third_party\qsocket-tcp\rust-local\Cargo.toml"

if (-not (Test-Path -LiteralPath $qsocketCore)) {
    throw "QSocket submodule is missing. Run: git submodule update --init --recursive"
}

$env:ANDROID_HOME = $sdkRoot
$env:ANDROID_NDK_HOME = $ndkRoot
$env:CARGO_HOME = $cargoHome
$env:CARGO_TARGET_DIR = $targetDir
$env:Path = (Join-Path $cargoHome "bin") + ";" + $env:Path
$env:CARGO_HTTP_TIMEOUT = "600"
$env:CARGO_HTTP_LOW_SPEED_LIMIT = "1"
$env:CARGO_NET_RETRY = "10"

$targets = @(
    @{ Rust = "aarch64-linux-android"; Abi = "arm64-v8a" },
    @{ Rust = "armv7-linux-androideabi"; Abi = "armeabi-v7a" },
    @{ Rust = "i686-linux-android"; Abi = "x86" },
    @{ Rust = "x86_64-linux-android"; Abi = "x86_64" }
)

foreach ($target in $targets) {
    rustup target add $target.Rust
}

if (-not (Get-Command cargo-ndk -ErrorAction SilentlyContinue)) {
    cargo install cargo-ndk --locked
}

$cargoArgs = @("ndk", "--platform", "21")
foreach ($target in $targets) {
    $cargoArgs += @("-t", $target.Abi)
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
