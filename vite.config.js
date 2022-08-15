/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:58:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 23:25:44
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx()],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'VivaceUI',
      fileName: 'vivace-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'],
    },
  },
});
