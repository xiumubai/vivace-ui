/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:50:53
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 23:02:32
 * @Description:
 */
const s: string = 'Hello Typescript';
console.log(s);

import { createApp } from 'vue';

import VButton from './button';
import SFCButton from './SFCButton.vue';

createApp(SFCButton).mount('#app');
