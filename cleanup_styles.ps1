$files = Get-ChildItem -Path "d:\Work-Space\Industrial Prijects\My Portfolio\portfolio\src" -Filter "*Styles.js" -Recurse

foreach ($file in $files) {
    Write-Host "Processing $($file.FullName)..."
    $content = Get-Content -Path $file.FullName
    $newContent = $content -replace "linear-gradient\(.*?\)", "var(--primary-color)"
    $newContent = $newContent -replace "radial-gradient\(circle at top right, rgba\(56, 189, 248, 0.2\), transparent 60%\), radial-gradient\(circle at bottom left, rgba\(147, 51, 234, 0.1\), transparent 50%\)", "transparent"
    $newContent = $newContent -replace " stone-300: #e5e7eb;", ""
    $newContent = $newContent -replace "rgba\(56, 189, 248", "rgba(128, 0, 0"
    $newContent = $newContent -replace "rgba\(147, 51, 234", "rgba(90, 0, 0"
    $newContent | Set-Content -Path $file.FullName
}
