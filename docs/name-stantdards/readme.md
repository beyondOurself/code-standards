# 命名规范
>  阿里前端开发手册;


::: tip
推荐使用 Vscode 采用相同的配置，保证格式化统一。项目的格式化遵循 eslintrc.js 中规定的规则；HTML 和 CSS 的格式化与主流保持一致。
:::


# 概览 :clipboard:

[[toc]]
---
# 内容 :japanese_ogre:
## 命名严谨性

* 代码中的命名<LH>严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。</LH>
* 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用 
    * 正例：henan / luoyang / rmb 等国际通用的名称，可视同英文 反例：DaZhePromotion [打折] / getPingfenByName() [评分] / int 某变量 = 3 杜绝完全不规范的缩写，避免望文不知义：
    * 反例：AbstractClass “缩写”命名成 AbsClass；condition “缩写”命名成 condi，<LH>此类随意缩写严重 降低了代码的可阅读性。</LH>

## 项目命名

| 类别     |              规范              |    正例    |     反例     |
| :------- | :----------------------------: | :--------: | :----------: |
| 项目命名 | 全部采用小写方式，以<LH>中线</LH>分隔。 | my-project | my_project |
## 目录命名

| 类别     |              规范              |    正例    |     反例     |
| :------- | :----------------------------: | :--------: | :----------: |
|  目录命名 | 全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。| scripts / styles / components / images / utils / layouts / demo-styles / demo-scripts / img / doc | script / style / demo_scripts / demoStyles / imgs / docs |
|VUE 的项目中的 components 中的组件目录。|使用 kebab-case 命名|head-search / page-loading / authorized / notice-icon|HeadSearch / PageLoading|
|VUE 的项目中的除 components 组件目录外的所有目录|使用 kebab-case 命名。|page-one / shopping-car / user-management|ShoppingCar / UserManagement|

## JS、CSS、SCSS、HTML、PNG 文件命名

| 类别     |              规范              |    正例    |     反例     |
| :------- | :----------------------------: | :--------: | :----------: |
| JS、CSS、SCSS、HTML、PNG 文件命名 | 全部采用小写方式， 以中划线分隔。 | render-dom.js / signup.css / index.html / company-logo.png | renderDom.js / UserManagement.html |
