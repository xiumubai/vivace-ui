/*
 * @Author: 朽木白
 * @Date: 2022-08-16 10:32:38
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 10:32:41
 * @Description:
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from '../config/unocss'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
})
