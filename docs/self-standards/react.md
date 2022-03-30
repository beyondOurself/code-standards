# React eslint 
> airbnb; 
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:


## eslint-plugin-react

### 参考 

[npm](https://www.npmjs.com/package/eslint-plugin-react)


### 安装

```js
npm install eslint-plugin-react --save-dev
```

### 使用

```js

 module.exports = {
  extends: [
     "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```


## eslint-config-airbnb 


### 参考

[npm](https://www.npmjs.com/package/eslint-config-airbnb)


### 安装



 ```js
 npx install-peerdeps --dev eslint-config-airbnb
 ```

 ### 使用

 ```js
 module.exports = {
  extends: [
    'airbnb',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
 ```