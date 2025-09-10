#!/bin/bash

# 中古汉语朗读器 - GitHub推送脚本
echo "🚀 准备推送中古汉语朗读器到GitHub..."

# 检查Git状态
echo "📋 检查Git状态..."
git status

echo ""
echo "🔑 需要GitHub凭据来完成推送"
echo "请按以下步骤操作："
echo ""
echo "1️⃣ 方式一：使用GitHub用户名和密码"
echo "   - 用户名：您的GitHub用户名"
echo "   - 密码：您的GitHub密码或Personal Access Token"
echo ""
echo "2️⃣ 方式二：使用Personal Access Token (推荐)"
echo "   - 在GitHub.com上：Settings → Developer settings → Personal access tokens"
echo "   - 生成新token，勾选 'repo' 权限"
echo "   - 用户名：您的GitHub用户名" 
echo "   - 密码：刚生成的token"
echo ""
echo "🔄 现在执行推送命令..."

# 推送到GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 推送成功！"
    echo "📱 您的项目现已在GitHub上：https://github.com/lmxxf/mid-ancient-chinese-reader"
    echo "🌐 GitHub Pages链接（如果启用）：https://lmxxf.github.io/mid-ancient-chinese-reader"
else
    echo ""
    echo "❌ 推送失败，请检查网络连接和GitHub凭据"
    echo "💡 提示：可能需要生成Personal Access Token代替密码"
fi