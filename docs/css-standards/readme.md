# 代码规范
> 京东凹凸实验室前端开发规范
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:
## 命名
* 类名使用小写字母，以中划线分隔 
* id 采用驼峰式命名 
* scss 中的变量、函数、混合、placeholder 采用驼峰式命名
* ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和 晦涩难懂的名称
:::: code-group
::: code-group-item 不推荐
``` css
.fw-800 { font-weight: 800; }
.red { color: red; }
```
:::
::: code-group-item 推荐
``` css
.heavy { font-weight: 800; }
.important { color: red; }
```
:::
::::


## 选择器

### css 选择器中避免使用标签名

* 从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择 器中出现标签名会存在潜在的问题。

### 使用直接子选择器

* 很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的 区别）。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下， 这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器， 你应该总 是考虑直接子选择器

:::: code-group
::: code-group-item 不推荐
``` css
.content .title { 
  font-size: 2rem; 
}
```
:::
::: code-group-item 推荐
``` css
.content > .title { 
    font-size: 2rem; 
}
```
:::
::::


## 尽量使用缩写属性 

:::: code-group
::: code-group-item 不推荐
``` css
border-top-style: none; 
font-family: palatino, georgia, serif; 
font-size: 100%; line-height: 1.6;
padding-bottom: 2em; 
padding-left: 1em;
padding-right: 1em; 
padding-top: 0;
```
:::
::: code-group-item 推荐
``` css
border-top: 0; 
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```
:::
::::


## 每个选择器及属性独占一行

:::: code-group
::: code-group-item 不推荐
``` css
button {
     width: 100px; 
     height: 50px;
     color: #fff;
     background: #00a0e9;
 }
```
:::
::: code-group-item 推荐
``` css
button { 
    width: 100px;
    height: 50px;
    color: #fff;
    background: #00a0e9;
}
```
:::
::::

## 省略 0 后面的单位

:::: code-group
::: code-group-item 不推荐
``` css
div {
    padding-bottom: 0px;
    margin: 0em; 
}
```
:::
::: code-group-item 推荐
``` css
div {
    padding-bottom: 0;
    margin: 0; 
}
```
:::
::::

## 避免使用 ID 选择器及全局标签选择器防止污染全局样式

:::: code-group
::: code-group-item 不推荐
``` css
#header { 
    padding-bottom: 0px;
    margin: 0em;
 }
```
:::
::: code-group-item 推荐
``` css
.header { 
    padding-bottom: 0px;
    margin: 0em;
}
```
:::
::::

## 编码规范

* 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
* 字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
* 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。（更多关于 BOM 可参考 BOM的介绍 和 「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？ ）

:::: code-group
::: code-group-item 正例
```css
@charset "UTF-8";

.jdc{}
```
:::
::: code-group-item 反例
```css
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.jdc{}
---
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.jdc{}
---
/* 无@charset规则 */
.jdc{}
```
:::
::::

## 代码风格

### 代码格式化

* 统一使用展开格式

样式书写一般有两种：一种是紧凑格式 (Compact)

```css
.jdc{ display: block;width: 50px;}

```
一种是展开格式（Expanded）

```css
.jdc{
    display: block;
    width: 50px;
}
```
## 代码大小写

* 样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

:::: code-group
::: code-group-item 正例
```css
.jdc{
	display:block;
}
```
:::
::: code-group-item 反例
```css
.JDC{
	DISPLAY:BLOCK;
}
```
:::
::::

## 选择器

* 尽量少用通用选择器 *
* 不使用 ID 选择器
* 不使用无具体语义定义的标签选择器

:::: code-group
::: code-group-item 正例
```js
/* 推荐 */
.jdc {}
.jdc li {}
.jdc li p{}
```
:::
::: code-group-item 反例
```js
/* 不推荐 */
*{}
#jdc {}
.jdc div{}
```
:::
::::

## 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```css
.jdc {
    width: 100%;
    height: 100%;
}
```

## 分号

每个属性声明末尾都要加分号；

```css
.jdc {
    width: 100%;
    height: 100%;
}
```

## 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

:::: code-group
::: code-group-item 正例
``` css
.jdc { 
    width: 100%; 
}
```
:::
::: code-group-item 反例
``` css
.jdc{ 
    width:100%;
}
```
:::
::::

逗号分隔的取值，逗号之后一个空格

:::: code-group
::: code-group-item 正例
```css
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```
:::
::: code-group-item 反例
```css
.jdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```
:::
::::

为单个css选择器或新申明开启新行

:::: code-group
::: code-group-item 正例
```css
.jdc, 
.jdc_logo, 
.jdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```
:::
::: code-group-item 反例
```css
.jdc,jdc_logo,.jdc_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```
:::
::::

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0

:::: code-group
::: code-group-item 正例
```css
.jdc {
    color: rgba(255,255,255,.5);
}
```
:::
::: code-group-item 反例
```css
.jdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```
:::
::::

属性值十六进制数值能用简写的尽量用简写

:::: code-group
::: code-group-item 正例
```css
.jdc {
    color: #fff;
}
```
:::
::: code-group-item 反例
```css
.jdc {
    color: #ffffff;
}
```
:::
::::

不要为 0 指明单位

:::: code-group
::: code-group-item 正例
```css
.jdc {
    margin: 0 10px;
}
```
:::
::: code-group-item 反例
```css
.jdc {
    margin: 0px 10px;
}
```
:::
::::

属性值引号

css属性值需要用到引号时，统一使用单引号

:::: code-group
::: code-group-item 正例
```css
.jdc { 
	font-family: 'Hiragino Sans GB';
}
```
:::
::: code-group-item 反例
```css
.jdc { 
	font-family: "Hiragino Sans GB";
}
```
:::
::::

## 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align /  white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
## CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后
```css
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```