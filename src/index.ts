/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:50:53
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 00:07:03
 * @Description:
 */

import { createApp } from 'vue/dist/vue.esm-browser';

import VivceUI from './entry';

createApp({
  template: `
      <div>
          <VButton>普通按钮</VButton>
      </div>
  `,
})
  .use(VivceUI)
  .mount('#app');
