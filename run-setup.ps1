param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('docker', 'podman', 'logs', 'local-db')]
    [string]$Mode
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$ComposeFile = 'compose.yaml'

function Invoke-Compose {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Command,

        [Parameter(Mandatory = $true)]
        [string[]]$Arguments
    )

    & $Command @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$Command $($Arguments -join ' ') failed with exit code $LASTEXITCODE"
    }
}

function Get-ComposeCommand {
    param(
        [Parameter(Mandatory = $true)]
        [ValidateSet('docker', 'podman')]
        [string]$PreferredEngine
    )

    if ($PreferredEngine -eq 'docker') {
        if (Get-Command 'docker' -ErrorAction SilentlyContinue) {
            return @('docker', @('compose'))
        }

        throw 'docker is not installed or not available on PATH.'
    }

    if (Get-Command 'podman-compose' -ErrorAction SilentlyContinue) {
        return @('podman-compose', @())
    }

    if (Get-Command 'podman' -ErrorAction SilentlyContinue) {
        return @('podman', @('compose'))
    }

    throw 'podman is not installed or not available on PATH.'
}

switch ($Mode) {
    'docker' {
        $composeCommand = Get-ComposeCommand -PreferredEngine 'docker'
        Invoke-Compose -Command $composeCommand[0] -Arguments ($composeCommand[1] + @('-f', $ComposeFile, 'up', '--build', '-d'))
    }
    'podman' {
        $composeCommand = Get-ComposeCommand -PreferredEngine 'podman'
        Invoke-Compose -Command $composeCommand[0] -Arguments ($composeCommand[1] + @('-f', $ComposeFile, 'up', '--build', '-d'))
    }
    'logs' {
        if (Get-Command 'docker' -ErrorAction SilentlyContinue) {
            Invoke-Compose -Command 'docker' -Arguments @('compose', '-f', $ComposeFile, 'logs', '-f')
            break
        }

        if (Get-Command 'podman-compose' -ErrorAction SilentlyContinue) {
            Invoke-Compose -Command 'podman-compose' -Arguments @('-f', $ComposeFile, 'logs', '-f')
            break
        }

        if (Get-Command 'podman' -ErrorAction SilentlyContinue) {
            Invoke-Compose -Command 'podman' -Arguments @('compose', '-f', $ComposeFile, 'logs', '-f')
            break
        }

        throw 'Neither docker, podman-compose, nor podman is available on PATH.'
    }
    'local-db' {
        Write-Host "Running Prisma generation and schema push for local development..." -ForegroundColor Cyan
        npx prisma generate
        npx prisma db push
        Write-Host "Local database schema push complete!" -ForegroundColor Green
    }
}
