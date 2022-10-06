/*
 * @Author: 朽木白
 * @Date: 2022-08-16 11:37:48
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2022-10-06 14:24:01
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  // 解析 .vue 文件
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended', // eslint
    'plugin:prettier/recommended', // plugin-prettier
    'plugin:vue/vue3-recommended', // plugin-vue
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析 .ts 文件
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'space-before-function-paren': ['error', 'never'],
    semi: 0, // 结尾不要分号
  },
}
