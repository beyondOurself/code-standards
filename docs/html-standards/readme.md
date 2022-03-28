# HTML 规范 
> Vue Template 同样适用; 阿里前端开发手册;京东凹凸实验室前端规范;


# 概览 :clipboard:

[[toc]]

---
# 内容 :japanese_ogre:
## HTML 类型


::: tip

正例使用 HTML5 的文档类型申明： （建议使用 text/html 格式的 HTML。避免使用 XHTML。XHTML 以及它的属性，比如 application/xhtml+xml 在浏览器中的应用支持与优化空间都十分有限）。

:::

* 规定字符编码
* IE 兼容模式
* 规定字符编码
* doctype 大写

``` html 正例
<!DOCTYPE html>
 <html>
      <head>
           <meta http-equiv="X-UA-Compatible" content="IE=Edge" /> <meta charset="UTF-8" />
            <title>Page title</title>
     </head>
        <body> <img src="images/company-logo.png" alt="Company"> </body>
 </html>
```



## 分块注释

在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。

## 语义化标签 


HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标 签。

* header,section,footer,aside,nav,main,article,figure所有的这些元素都是块级元素


:::: code-group
::: code-group-item 正例
``` html
<header></header> 
<footer></footer>
```
:::
::: code-group-item 反例
``` html
<div> 
    <p></p> 
</div>
```
:::
::::

## 引号

* 使用双引号(" ") 而不是单引号(’ ') 。

:::: code-group
::: code-group-item 正例
``` html
<div class="box"></div>
```
:::
::: code-group-item 反例
``` html
<div class="box"></div>
```
:::
::::

## DOCTYPE 声明
* HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：
:::: code-group
::: code-group-item 正例
```html
<!DOCTYPE html>
```
:::
::::

## 页面语言LANG

* 正例使用属性值 cmn-Hans-CN（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 zh-CN 属性值

:::: code-group
::: code-group-item 正例
```html
<html lang="zh-CN">
```
:::
::::

## CHARSET 

* 因为 ISO-8859 中字符集大小是有限的，且在多语言环境中不兼容，所以 Unicode 联盟开发了 Unicode 标准。

* Unicode 标准覆盖了（几乎）所有的字符、标点符号和符号。

* Unicode 使文本的处理、存储和运输，独立于平台和语言。

* HTML-5 中默认的字符编码是 UTF-8

:::: code-group
::: code-group-item 正例
```html
<meta charset="UTF-8">
```
:::
::::

## 元素及标签闭合

* 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
* 空元素标签都不加 “/” 字符

:::: code-group

::: code-group-item 正例
```html
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>
	
<br>
```
:::
::: code-group-item 反例
```html
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>

<br/>
```
:::
::::

# 书写风格

## HTML代码大小写
:::: code-group

::: code-group-item 正例
```html
<div class="demo"></div>
```
:::
::: code-group-item 反例
```html
<div class="DEMO"></div>
	
<DIV CLASS="DEMO"></DIV>
```
:::
::::

* HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
	
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

## 类型属性
* 不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含
:::: code-group

::: code-group-item 正例
```html
<link rel="stylesheet" href="" >
<script src=""></script>
```
:::
::: code-group-item 反例
```html
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```
:::
::::

## 元素属性

* 元素属性值使用双引号语法
* 元素属性值可以写上的都写上

:::: code-group

::: code-group-item 正例
```html
<input type=text>	
<input type='text'>
	
<input type="radio" name="name" checked >
```
:::
::: code-group-item 反例
```html
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```
:::
::::

## 特殊字符引用

* 文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

* HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

:::: code-group

::: code-group-item 正例
```html
<a href="#">more&gt;&gt;</a>
```
:::
::: code-group-item 反例
```html
<a href="#">more>></a>
```
:::
::::

## 代码缩进

* 统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

``` html
<div class="jdc">
    <a href="#"></a>
</div>
```

## 纯数字输入框

* 使用 type="tel" 而不是 type="number"
``` html
<input type="tel">
```

## 代码嵌套

* 元素嵌套规范，每个块状元素独立一行，内联元素可选

:::: code-group

::: code-group-item 正例
```html
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```
:::
::: code-group-item 反例
```html
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>
```
:::
::::

## 段落元素与标题元素只能嵌套内联元素
:::: code-group

::: code-group-item 正例
```js
<h1><span></span></h1>
<p><span></span><span></span></p>
```
:::
::: code-group-item 反例
```js
<h1><div></div></h1>
<p><div></div><div></div></p>
```
:::
::::