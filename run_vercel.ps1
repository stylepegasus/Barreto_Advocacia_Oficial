$ErrorActionPreference = 'Stop'

Write-Host "PASSO 1: CARREGAR VERCEL_TOKEN"
$tokenLine = Get-Content .env | Where-Object { $_ -match '^VERCEL_TOKEN=' }
if ($tokenLine) {
    $env:VERCEL_TOKEN = ($tokenLine -split '=')[1]
    Write-Host "VERCEL_TOKEN carregado: ***"
} else {
    Write-Host "Erro: VERCEL_TOKEN não encontrado no .env"
    exit 1
}

Write-Host "`nPASSO 2: CHECK VERCEL VERSION"
try {
    $version = vercel --version
    Write-Host "Vercel version: $version"
} catch {
    Write-Host "Tentando adicionar npm ao PATH..."
    $npmPrefix = npm.cmd config get prefix
    $env:Path += ";$npmPrefix"
    try {
        $version = vercel --version
        Write-Host "Vercel version (com novo PATH): $version"
    } catch {
        Write-Host "Falha ao rodar vercel --version mesmo após ajuste no PATH"
        exit 1
    }
}

Write-Host "`nPASSO 3: LINKAR PROJETO"
try {
    vercel link --project barreto_advocacia_esp --yes --token $env:VERCEL_TOKEN
} catch {
    Write-Host "Link falhou, tentando forçar..."
    vercel link --project barreto_advocacia_esp --yes --force --token $env:VERCEL_TOKEN
}

if (Test-Path ".vercel/project.json") {
    Write-Host ".vercel/project.json foi criado."
    Get-Content .vercel/project.json | Out-String | Write-Host
} else {
    Write-Host "Erro: .vercel/project.json não foi criado."
}

Write-Host "`nPASSO 4: TESTE FINAL"
vercel --dry-run --token $env:VERCEL_TOKEN
