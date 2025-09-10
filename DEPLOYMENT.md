# 🚀 中古汉语朗读器部署指南

## 📋 部署概述

这个项目支持多种部署方式，最推荐的是GitHub Pages自动部署。

## 🌐 GitHub Pages 部署

### 方式一：自动部署（推荐）

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "准备部署到GitHub Pages"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 访问GitHub仓库页面
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 系统会自动检测到 `.github/workflows/deploy.yml` 配置

3. **等待自动部署**
   - 推送代码后会自动触发部署
   - 在Actions页面可以查看部署进度
   - 部署完成后在Pages设置中获取网站链接

### 方式二：手动配置

1. **Repository Settings**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"

2. **获取访问链接**
   - 格式：`https://username.github.io/repository-name`
   - 具体：`https://lmxxf.github.io/mid-ancient-chinese-reader`

## 🔧 其他部署选项

### Netlify部署

1. 连接GitHub仓库到Netlify
2. 构建设置：
   - Build command: 留空
   - Publish directory: `/`
3. 部署完成后获取自定义域名

### Vercel部署

1. 导入GitHub仓库到Vercel
2. 框架预设：Other
3. 构建和输出设置保持默认
4. 一键部署完成

### 本地HTTP服务器

```bash
# Python 3
python3 -m http.server 8000

# Node.js (需要安装http-server)
npx http-server

# PHP
php -S localhost:8000
```

## 🔍 部署验证

### 功能检查清单

- [ ] 页面正常加载
- [ ] CSS样式正确显示
- [ ] JavaScript功能工作正常
- [ ] 中古音数据加载成功
- [ ] 朗读功能可用（需HTTPS）
- [ ] 标注功能正常
- [ ] 响应式设计适配移动端

### 测试命令

```bash
# 检查所有文件是否存在
ls -la

# 验证JavaScript语法
node -c app.js
node -c middle-chinese-data.js

# 运行功能测试
node test.js
```

## 🌍 自定义域名

### 配置CNAME

1. 在域名服务商处添加CNAME记录：
   ```
   www.your-domain.com -> lmxxf.github.io
   ```

2. 在GitHub Pages设置中输入自定义域名

3. 启用 "Enforce HTTPS"

### 更新CNAME文件

编辑项目根目录的 `CNAME` 文件：
```
your-custom-domain.com
```

## 🔒 HTTPS和安全性

### GitHub Pages自动提供HTTPS
- 所有GitHub Pages站点都支持HTTPS
- 语音功能需要HTTPS环境才能工作
- 建议总是使用HTTPS链接

### 内容安全策略（CSP）

如需额外安全性，可在HTML头部添加：
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

## 📊 部署状态监控

### GitHub Actions状态

- 在Actions标签页查看部署状态
- 绿色✅表示部署成功
- 红色❌表示部署失败，点击查看错误详情

### 网站可用性检查

```bash
# 检查网站是否可访问
curl -I https://lmxxf.github.io/mid-ancient-chinese-reader

# 期望返回：HTTP/2 200
```

## 🐛 常见问题

### 1. 404错误
- 确认文件名大小写正确
- 检查相对路径是否正确
- 确认所有资源文件已提交

### 2. JavaScript不工作
- 检查浏览器控制台错误
- 确认所有JS文件路径正确
- 验证语法错误

### 3. CSS样式丢失
- 检查CSS文件路径
- 确认样式文件已正确上传
- 验证MIME类型设置

### 4. 语音功能不可用
- 确保站点使用HTTPS
- 检查浏览器兼容性
- 验证Web Speech API支持

## 📱 移动端适配验证

- iPhone Safari测试
- Android Chrome测试
- 响应式断点检查
- 触控操作验证

## 🎯 性能优化

### 资源压缩
```bash
# CSS压缩（可选）
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css

# JavaScript压缩（可选）
npm install -g uglify-js
uglifyjs app.js -o app.min.js
```

### CDN加速

考虑使用JSDelivr等CDN加速静态资源访问：
```
https://cdn.jsdelivr.net/gh/lmxxf/mid-ancient-chinese-reader@main/
```

## 📞 技术支持

- GitHub Issues: 提交bug报告和功能请求
- 项目文档: README.md
- 测试文件: test.js

---

*🎉 祝您部署顺利！让更多人体验中古汉语的魅力。*