# Copy this file to build-env.local.ps1 and adjust it for each computer.
# build-env.local.ps1 is ignored by Git.

$BuildAndroidSdkRoot = Join-Path $env:LOCALAPPDATA "Android\Sdk"
$BuildAndroidNdkRoot = Join-Path $BuildAndroidSdkRoot "ndk\27.2.12479018"
$BuildCargoHome = Join-Path $env:USERPROFILE ".cargo"
$BuildCargoTargetDir = Join-Path $PSScriptRoot ".runtime\rust-target"
