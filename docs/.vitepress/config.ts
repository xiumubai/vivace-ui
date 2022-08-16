/*
 * @Author: 朽木白
 * @Date: 2022-08-16 10:08:02
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 10:25:33
 * @Description:
 */
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
};
const config = {
  title: 'Vivace UI',
  description: '快捷的UI组件库',
  themeConfig: {
    sidebar,
  },

  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
