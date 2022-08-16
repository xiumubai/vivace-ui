/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:58:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 15:03:07
 * @Description:
 */

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';
import Unocss from './config/unocss';
// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    cssCodeSplit: false,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    lib: {
      entry: './src/entry.ts',
      name: 'VivaceUI',
      fileName: 'vivace-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'],
    },
  },

  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
