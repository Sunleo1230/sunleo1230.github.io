Builder

思考过程

用户要求我设计合适可用的 CSS 样式，放在 App.css 文件中，并标出 CSS 样式名称。我需要检查当前的 App.css 文件内容，然后设计一套完整的、现代化的 CSS 样式。

src\App.css

Thought

现在我将设计一套完整的、现代化的 CSS 样式，包括基础样式、导航栏样式、各个页面部分的样式、响应式设计和动画效果，并为每个样式添加清晰的注释和命名。

App.css
src\App.css

+ 504 - 9

查看变更

Thought

我已经为您设计了一套完整的、现代化的 CSS 样式，并将其保存在 App.css 文件中。以下是样式名称及其用途：

### 基础样式
- * - 基础样式重置，清除默认边距和内边距
- body - 全局样式，设置字体和背景颜色
### 布局样式
- .content - 内容区域样式，设置内边距和最大宽度
- .footer - 页脚样式，设置背景颜色和内边距
- .footer-content - 页脚内容样式，设置最大宽度
- .social-links - 社交媒体链接样式
### 导航栏样式
- .navbar - 导航栏样式，固定在顶部
- .navbar.scrolled - 导航栏滚动效果
- .logo - Logo 样式
- .nav-menu - 导航菜单样式
- .nav-menu a - 导航链接样式
- .nav-menu a:hover - 导航链接 hover 效果
### 内容区域样式
- .welcome-title - 欢迎标题样式
- .welcome-title h1 - 欢迎标题文字样式
- .sunleo - 用户名样式
### 关于我部分样式
- .about-section - 关于我部分容器样式
- .about-content - 关于我内容样式，使用 flex 布局
- .about-text - 关于我文本样式
- .about-image - 关于我图片样式
### 作品部分样式
- .works-section - 作品部分容器样式
- .works-grid - 作品网格样式，使用 CSS Grid
- .work-item - 单个作品项样式
- .work-image - 作品图片样式
- .work-content - 作品内容样式
- .work-link - 作品链接样式
### 技术栈部分样式
- .skills-section - 技术栈部分容器样式
- .skills-grid - 技能网格样式，使用 CSS Grid
- .skill-item - 单个技能项样式
- .skill-icon - 技能图标样式
- .skill-level - 技能水平条背景样式
- .skill-progress - 技能水平条进度样式
### 联系我部分样式
- .contact-section - 联系我部分容器样式
- .contact-form - 联系表单样式
- .form-group - 表单组样式
- .form-group label - 表单标签样式
- .form-group input, .form-group textarea - 表单输入框和文本域样式
- .submit-btn - 提交按钮样式
### 动画效果
- fadeInUp - 淡入上移动画，用于各部分内容的进入效果
### 响应式设计
- @media (max-width: 768px) - 平板设备响应式样式
- @media (max-width: 480px) - 手机设备响应式