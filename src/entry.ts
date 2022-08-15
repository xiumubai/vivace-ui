/*
 * @Author: 朽木白
 * @Date: 2022-08-15 23:14:39
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 23:16:46
 * @Description:
 */
import { App } from 'vue';
import VButton from './button';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';

// 导出单独组件
export { VButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(VButton.name, VButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
