/*
 * @Author: 朽木白
 * @Date: 2022-08-15 23:14:39
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 14:35:47
 * @Description:
 */
import { App } from 'vue'
import VButton from './button'

import 'uno.css'
// 导出单独组件
export { VButton }

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(VButton.name, VButton)
  },
}
