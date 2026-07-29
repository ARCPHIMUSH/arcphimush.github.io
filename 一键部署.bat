@echo off
cd /d G:\arcphimush-blog
echo ================================
echo   博客部署中...
echo ================================
echo.
echo [1/2] 生成网页并推送到 GitHub...
call npx hexo clean && npx hexo deploy
if %errorlevel% neq 0 (
    echo ❌ 网页部署失败！
    pause
    exit /b 1
)
echo.
echo [2/2] 备份源文件...
call git add -A && git commit -m "更新: %date% %time%" && git push
if %errorlevel% neq 0 (
    echo ⚠️ 源文件备份失败（网页已上线）
)
echo.
echo ================================
echo   ✅ 全部完成！
echo   访问: https://arcphimush.github.io/
echo ================================
pause
