<!--
 * @Author: 朽木白
 * @Date: 2022-08-15 22:44:06
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 10:00:30
 * @Description:
-->

# vivace-admin

A Vue.js 3.0 UI Toolkit for Admin

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
