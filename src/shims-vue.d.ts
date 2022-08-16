/*
 * @Author: 朽木白
 * @Date: 2022-08-15 23:02:11
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 23:02:19
 * @Description:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
