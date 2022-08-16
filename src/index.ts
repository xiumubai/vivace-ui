/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:50:53
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 08:48:10
 * @Description:
 */

import { createApp } from 'vue/dist/vue.esm-browser';

import VivaceUI from './entry';

createApp({
  template: `
  <div style="margin-bottom:20px;">
    <h3>颜色：props-{color}</h3>
    <VButton color="blue">主要按钮</VButton>
    <VButton color="green">绿色按钮</VButton>
    <VButton color="gray">灰色按钮</VButton>
    <VButton color="yellow">黄色按钮</VButton>
    <VButton color="red">红色按钮</VButton>
  </div>

  <div style="margin-bottom:20px;">
    <h3>大小：rops-{size}</h3>
    <VButton size="small">小</VButton>
    <VButton size="medium">中</VButton>
    <VButton size="large">大</VButton>
  </div>
  `,
})
  .use(VivaceUI)
  .mount('#app');
