/*
 * @Author: 朽木白
 * @Date: 2022-08-16 10:26:19
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 10:27:19
 * @Description:
 */
import Theme from 'vitepress/dist/client/theme-default';
import VivaceUI from '../../../src/entry';

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(VivaceUI);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  },
};
