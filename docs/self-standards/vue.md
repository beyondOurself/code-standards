# Vue eslint
> vueTeam; 
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:

## eslint-plugin-vue

### 安装

```js
npm install --save-dev eslint eslint-plugin-vue
```
```js
yarn add -D eslint eslint-plugin-vue
```

### 配置

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' //果你使用的是Vue.js 2.x，使用这个
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```
