# 自定义
> 
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:


## 基准方案


### 安装

#### 基础包

```js

pnpm  add -D prettier  eslint  eslint-config-prettier eslint-plugin-prettier husky lint-staged eslint-config-airbnb-base  eslint-plugin-import

```




### 自动化 


#### 


* 配置命名，执行 parepare 生成 husky 

:::: code-group
::: code-group-item package.json
```js
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
:::
::::

* 执行以下命令, 生成 git hooks pre-commit

```js
npx husky add .husky/pre-commit "npx lint-staged"
```

*  在package.json  配置 lint-staged

:::: code-group
::: code-group-item package.json
```js
  "lint-staged": {
    "src/**": [
      "eslint --fix",
      "git add"
    ]
  },
```
:::
::::


### 基础配置 

####  prettier  配置

:::: code-group
::: code-group-item .prettierrc.js
```js
module.exports = {
    printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80,最大行长规则通常设置为100或120
    tabWidth: 4, //一个tab代表几个空格数，默认为2 
    useTabs: false, // 用制表符来做缩进 默认 false 
    semi: false, // 是否打印分号 默认 true 
    singleQuote: true ,// 是否使用单引号 默认 false
    quoteProps: 'as-needed', // 给对象属性加引号 默认 as-needed 可选 as-needed|consistent|preserve
    jsxSingleQuote: true, // jsx 是否使用单引号 默认 false
    trailingComma: 'es5', // 末尾是否带逗号  默认 es5 可选 es5|none|all
    bracketSpacing: true, // 在字面量对象括号之间加空格 { foo: bar } 默认true
    bracketSameLine: false,// html 闭合标签符 > 单独 一行 默认 false
    arrowParens: 'always', // 在 单个参数 的箭头函数 中 使用小括号包裹参数。(x) => x 默认 always 可选always|avoid
    rangeStart: 0, // 文件开头 空白字符  int 
    rangeEnd: Infinity, // 文件结尾 空白字符  int 
    proseWrap: 'always', // 文本换行 默认 preserve  可选 always|never|preserve
    htmlWhitespaceSensitivity: 'css', // html 空格敏感度 默认 css 可选 css|strict|ignore
    vueIndentScriptAndStyle: false, // 是否缩进Vue文件中<script>和<style>标记内的代码 默认 false
    endOfLine: 'lf', // 行结束符  默认 lf  可选 lf|crlf|cr|auto
    embeddedLanguageFormatting:'auto', // 是否格式化嵌入的代码 默认 auton 可选 auto | off
}
```
:::
::::

#### eslint 配置命名

:::: code-group
::: code-group-item .eslintrc.js
```js
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // xxx 配置具体平台  例如:  "plugin:react/recommended",
  extends: ['airbnb-base', 'xxx', 'plugin:prettier/recommended'],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error" // 开启规则
  }
}
```
:::
::::


####  eslint 忽略文件配置 

:::: code-group
::: code-group-item .eslintignore
```js
build/*.js
src/assets
public
dist
node_modules
```
:::
::::


####  Vue  或  React 

```js
eslint-plugin-react
```

* react eslint 配置 

:::: code-group
::: code-group-item eslintrc.js
```js
  "extends": [
        "plugin:react/recommended",
    ],
     "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
```
:::
::::



```js
 eslint-plugin-vue
```


* vue eslint 配置 

:::: code-group
::: code-group-item eslintrc.js
```js
  "extends": [
        "plugin:vue/recommended",
    ],
    "plugins": [
        "vue",
    ],
```
:::
::::


## eslint 参考方案

###  Javascript Style 

#### 方案1

```js
eslint-config-o2team

```

#### 方案2
```js
eslint-config-airbnb-base

```

###  vue

#### 方案1

```js
eslint-config-airbnb-base + eslint-plugin-vue

```


###  react


#### 方案1

* 已经包含react
```js
eslint-config-airbnb 
```


