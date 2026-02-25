# 个人主页项目

这是一个使用 React + Vite 构建的个人主页项目，用于展示个人信息、作品、技术栈和联系方式。

## 技术栈

- **前端框架**：React 19.2.0
- **构建工具**：Vite 7.3.1
- **样式**：CSS3
- **语言**：JavaScript

## 项目功能

- ✅ 个人信息展示
- ✅ 作品展示（带点赞功能）
- ✅ 技术栈展示
- ✅ 联系方式（邮箱、QQ、电话、社交媒体等）
- ✅ 留言表单（前端验证）
- ✅ 响应式设计
- ✅ 动画效果

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

### 2. 安装依赖

```bash
npm install
```

### 3. 开发模式运行

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动开发服务器。

### 4. 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 项目结构

```
homepage/
├── src/
│   ├── components/          # 组件目录
│   │   ├── AboutMe.jsx      # 关于我组件
│   │   ├── ContactMe.jsx    # 联系我组件
│   │   ├── FastGo.jsx       # 导航栏组件
│   │   ├── Footer.jsx       # 页脚组件
│   │   ├── Skills.jsx       # 技术栈组件
│   │   ├── ToSay.jsx        # 留言表单组件
│   │   └── Works.jsx        # 作品展示组件
│   ├── image/               # 图片资源
│   │   └── me.jpg           # 个人头像
│   ├── App.css              # 全局样式
│   ├── main.jsx             # 应用入口
│   └── personalInfo.jsx     # 个人信息数据
├── .gitignore               # Git 忽略文件
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── package-lock.json        # 依赖锁定文件
├── vite.config.js           # Vite 配置
└── README.md                # 项目说明
```

## 自定义配置

### 个人信息配置

编辑 `src/personalInfo.jsx` 文件，修改以下内容：

```javascript
export const personalInfo = {
    name: "你的名字",
    title: "你的头衔",
    introduction: ["你的个人介绍"]
};

export const works = [
    {
        name: "作品名称",
        description: "作品描述",
        link: "作品链接",
        lang: "使用技术"
    }
    // 更多作品...
];

export const contact = [
    {
        ways: "联系方式",
        contents: "联系内容",
        link: "联系链接"
    }
    // 更多联系方式...
];
```

### 样式自定义

编辑 `src/App.css` 文件，修改相应的样式规则。

## 部署到 GitHub Pages

### 方法 1：使用 GitHub Actions（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. 推送代码到 GitHub 仓库的 `main` 分支

3. 在 GitHub 仓库设置中，启用 Pages 功能，选择 `gh-pages` 分支作为源

### 方法 2：手动部署

1. 构建项目：

```bash
npm run build
```

2. 推送构建产物到 GitHub 仓库：

```bash
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/username/username.github.io.git main
cd ..
```

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 联系方式

- GitHub: [username](https://github.com/username)
- Email: your.email@example.com