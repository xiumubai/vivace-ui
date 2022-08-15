/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:50:53
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 00:22:55
 * @Description:
 */

import { createApp } from 'vue/dist/vue.esm-browser';

import VivaceUI from './entry';

createApp({
  template: `
      <div>
        <VButton color="blue">蓝色按钮</VButton>
        <VButton color="green">绿色按钮</VButton>
        <VButton color="gray">灰色按钮</VButton>
        <VButton color="yellow">黄色按钮</VButton>
        <VButton color="red">红色按钮</VButton>
      </div>
  `,
})
  .use(VivaceUI)
  .mount('#app');
