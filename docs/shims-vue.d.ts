/*
 * @Author: 朽木白
 * @Date: 2022-08-16 10:33:41
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 10:33:53
 * @Description:
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
