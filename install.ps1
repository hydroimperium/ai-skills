param(
    [ValidateSet('opencode', 'claude', 'all')]
    [string]$Target = 'opencode',

    [ValidateSet('user', 'project')]
    [string]$Scope = 'user',

    [switch]$Force,
    [switch]$SkillsOnly,
    [switch]$CommandsOnly
)

$ErrorActionPreference = 'Stop'
$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$SkillsSource = Join-Path $RepoRoot 'skills'
$CommandsSource = Join-Path $RepoRoot 'commands'

function Get-TargetPaths {
    param([string]$Name)

    if ($Name -eq 'opencode') {
        if ($Scope -eq 'user') {
            return @{
                Skills = Join-Path $env:USERPROFILE '.config\opencode\skills'
                Commands = Join-Path $env:USERPROFILE '.config\opencode\commands'
                PreserveCategories = $true
            }
        }
        return @{
            Skills = Join-Path (Get-Location) '.opencode\skills'
            Commands = Join-Path (Get-Location) '.opencode\commands'
            PreserveCategories = $true
        }
    }

    if ($Name -eq 'claude') {
        if ($Scope -eq 'user') {
            return @{
                Skills = Join-Path $env:USERPROFILE '.claude\skills'
                Commands = Join-Path $env:USERPROFILE '.claude\commands'
                PreserveCategories = $false
            }
        }
        return @{
            Skills = Join-Path (Get-Location) '.claude\skills'
            Commands = Join-Path (Get-Location) '.claude\commands'
            PreserveCategories = $false
        }
    }

    throw "Unknown target: $Name"
}

function Copy-SkillFolder {
    param(
        [string]$Source,
        [string]$Destination,
        [bool]$PreserveCategories,
        [string]$Category
    )

    $name = Split-Path -Leaf $Source
    if ($PreserveCategories) {
        $dest = Join-Path $Destination (Join-Path $Category $name)
    } else {
        $dest = Join-Path $Destination $name
    }

    if (Test-Path $dest) {
        if (-not $Force) {
            Write-Host "  skip (exists): $dest" -ForegroundColor Yellow
            return
        }
        Remove-Item -Recurse -Force $dest
    }

    New-Item -ItemType Directory -Force (Split-Path -Parent $dest) | Out-Null
    Copy-Item -Recurse -Force $Source $dest
    Write-Host "  installed: $dest" -ForegroundColor Green
}

function Install-Skills {
    param([hashtable]$Paths)

    if (-not (Test-Path $SkillsSource)) {
        throw "Skills source not found: $SkillsSource"
    }

    Write-Host "Installing skills to $($Paths.Skills)"
    $categories = Get-ChildItem $SkillsSource -Directory
    foreach ($category in $categories) {
        $skills = Get-ChildItem $category.FullName -Directory
        foreach ($skill in $skills) {
            if (Test-Path (Join-Path $skill.FullName 'SKILL.md')) {
                Copy-SkillFolder -Source $skill.FullName -Destination $Paths.Skills -PreserveCategories $Paths.PreserveCategories -Category $category.Name
            }
        }
    }
}

function Install-Commands {
    param([hashtable]$Paths)

    if (-not (Test-Path $CommandsSource)) {
        throw "Commands source not found: $CommandsSource"
    }

    New-Item -ItemType Directory -Force $Paths.Commands | Out-Null
    Write-Host "Installing commands to $($Paths.Commands)"
    $files = Get-ChildItem $CommandsSource -File -Filter '*.md' | Where-Object { $_.Name -ne 'README.md' }
    foreach ($file in $files) {
        $dest = Join-Path $Paths.Commands $file.Name
        if ((Test-Path $dest) -and -not $Force) {
            Write-Host "  skip (exists): $dest" -ForegroundColor Yellow
            continue
        }
        Copy-Item -Force $file.FullName $dest
        Write-Host "  installed: $dest" -ForegroundColor Green
    }
}

$targets = if ($Target -eq 'all') { @('opencode', 'claude') } else { @($Target) }

foreach ($name in $targets) {
    $paths = Get-TargetPaths -Name $name
    Write-Host ""
    Write-Host "Target: $name ($Scope)" -ForegroundColor Cyan

    if (-not $CommandsOnly) {
        Install-Skills -Paths $paths
    }
    if (-not $SkillsOnly) {
        Install-Commands -Paths $paths
    }
}

Write-Host ""
Write-Host "Done. Restart or reload your agent if the new skills or commands do not appear." -ForegroundColor Cyan
Write-Host "Use -Force to overwrite existing files." -ForegroundColor DarkGray
