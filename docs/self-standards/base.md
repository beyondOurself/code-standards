# Base eslint
> o2team; airbnb; 
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:

## eslint-config-airbnb-base


### 参考

[npm](https://www.npmjs.com/package/eslint-config-airbnb-base)

### 安装

``` js
npx install-peerdeps --dev eslint-config-airbnb-base
```

### 配置

```js
module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```
## eslint-config-o2team


### 参考

[github](https://github.com/o2team/eslint-config-o2team)

### 安装

``` js
npm install --save-dev eslint eslint-config-o2team
```

### 配置

```js
module.exports = {
  "extends": "o2team",
  "rules": {
    // Additional, per-project rules...
  }
}
```

###  eslint-config-o2team/legacy

* 使用ES5及以下版本

```js
{
  "extends": "o2team/legacy",
  "rules": {
    // Additional, per-project rules...
  }
}
```