<br>

<p align="center">
<img src="https://github.com/smarty-team/smarty-admin/blob/main/assets/logo.jpeg" style="width:200px;" />
</p>

<h1 align="center">Vivace-UI</h1>

<p align="center">A Vue.js 3.0 UI Toolkit for Admin</p>

<p align="center">
    <a href="https://www.npmjs.com/package/smarty-admin-ui"><img src="https://img.shields.io/npm/v/smarty-admin-ui?color=c95f8b&amp;label=" alt="NPM version"></a>
    <a href="https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml"><img src="https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"></a>
</p>

<br>
<br>

# 版本迭代

## 1.将组件封装为组件库

- [x] 使用`index.html`测试`npx vite`
- [x] 测试`ts`功能是否正常
- [x] 测试`button`组件
- [x] 使用`@vitejs/plugin-vue`添加一个`SFC`单文件组件
- [x] 添加`shims-vue.d.ts`解决不能识别`.vue`的报错
- [x] 添加`@vitejs/plugin-vue-jsx`支持`tsx`文件
- [x] 添加`tsconfig.json`文件解决`JSX` 语法报错
- [x] 在 `entry.js`中导出文件，实现`install`方法
- [x] 配置打包输出文件格式`'esm', 'umd', 'iife'`
- [x] demo 测试`esm`文件

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/mvp](https://github.com/xiumubai/vivace-admin/tree/feature/mvp)

## 2.使用 UnoCSS 实现原子化 CSS

UnoCSS 是一个拥有高性能且具灵活性的即时原子化 CSS 引擎，可以兼顾产物体积和开发性能。

除此以外 UnoCSS 还可以有更强的可定制性和易用性。

- 完全可定制 - 没有核心实用程序，所有功能都通过预设提供。
- 无需解析、无需 AST、无需扫描，它是即时的（比 Windi CSS 或 Tailwind JIT 快 200 倍）
- ~3.5kb min+gzip - 零依赖和浏览器友好。
- 快捷方式 - 动态别名实用程序。
- 属性模式 - 在属性中分组实用程序
- 纯 CSS 图标 - 使用任何图标作为单个类。
- 检查器 - 以交互方式检查和调试。
- CSS-in-JS 运行时版本。
- CSS Scoping。
- CSS 代码拆分 - 为 MPA 提供最小的 CSS。
- 库友好 - 随你的组件库提供原子样式并安全地限定范围。

[UnoCSS 的 github 地址](https://github.com/unocss/unocss)

**功能实现**

- [x] 引入 UnoCSS 实现原子化 CSS 样式
- [x] 使用安全列表实现在 UnoCSS 中使用变量定制样式
- [x] 引入 `@unocss/preset-icons` 预设实现字体图标按钮,需要安装`@iconify-json/ic`

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/unocss](https://github.com/xiumubai/vivace-admin/tree/feature/unocss)

## 3.添加文档网站

- [x] 利用 Vitepress 搭建生成文档网站
- [x] 引用组件并展示到 Demo；
- [x] 引用 Markdown 插件方便代码 Demo 示例编写。

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/docs](https://github.com/xiumubai/vivace-admin/tree/feature/docs)

## 4.搭建 Vitest 单元测试环境

- [x] 配置 Vitest 环境
- [x] button 组件测试用例

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/vitest](https://github.com/xiumubai/vivace-admin/tree/feature/vitest)

## 5.集成 Eslint + Prettier + Husky 规范化

- [x] 编码与项目结构规范；
- [x] Eslint 代码检查工具；
- [x] Prettier 代码格式化工具；
- [x] Git commit 提交检查脚本；
- [x] Husky + git hook 提交前校验。

Angular 团队 git 提交规范如下，本文严格按照这个规范提交代码：

- type：commit 的类型；
- feat：新功能、新特性；
- fix: 修改 bug；
- perf：更改代码，以提高性能；
- refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
- docs：文档修改；
- style：代码格式修改, 注意不是 css 修改（例如分号修改）；
- test：测试用例新增、修改；
- build：影响项目构建或依赖项修改；
- revert：恢复上一次提交；
- ci：持续集成相关文件修改；
- chore：其他修改（不在上述类型中的修改）；
- release：发布新版本；
- workflow：工作流相关文件修改。

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/lint](https://github.com/xiumubai/vivace-admin/tree/feature/lint)

## 6.发布兼容多种 JS 模块标准的软件包

常见的模块规范:

- IFFE：使用立即执行函数实现模块化 例：`(function()) {}`；
- CJS：基于 CommonJS 标准的模块化；
- AMD：使用 Require 编写；
- CMD：使用 SeaJS 编写；
- ESM：ES 标准的模块化方案 ( ES6 标准提出 )；
- UMD：兼容 CJS 与 AMD、IFFE 规范。

- [x] 配置 Vite 输出多种格式模块；
- [x] 配置 SourceMap 映射；
- [x] 测试打包结果。

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/build](https://github.com/xiumubai/vivace-admin/tree/feature/build)

## 7.持续集成 CI：基于 Github Action 的回归验证

- [x] 创建工作流 Workflow；
- [x] 创建 Job；
- [x] 运行 CI 服务；
- [x] 颁发 CI 徽章。

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/ci](https://github.com/xiumubai/vivace-admin/tree/feature/ci)

## 8.提交软件包到 npm 仓库

- [x] 确定语义化版本；
- [x] 设置持续交付过程 ;
- [x] 引用自动发布徽章。

语义化版本规定:

版本格式：主版本号.次版本号.修订号（MAJOR.MINOR.PATCH）

- 主版本号：当你做了不兼容的 API 修改；
- 次版本号：当你做了向下兼容的功能性新增；
- 修订号：当你做了向下兼容的问题修正。

本章代码参考：[https://github.com/xiumubai/vivace-admin/tree/feature/ci](https://github.com/xiumubai/vivace-admin/tree/feature/ci)

## 9.使用 vercel 部署文档

登陆[官方网站](https://vercel.com/)，把 vivace-admin 拉取到仓库中，配置参数，直接 deploy

访问地址：[https://vivace-admin.vercel.app/](https://vivace-admin.vercel.app/)

## 实现组件库的按需引入

## TODO

- [ ] 自动添加 changelog
- [ ] 自动打 tag
- [ ] commitlit 配置
- [ ] 改造为 monorepo 模式
