# 注释规范
> 京东凹凸实验室前端开发规范;
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:

* 注释以字符 /* 开始，以字符 */ 结束
* 注释不能嵌套

```css
/*Comment Text*/
```

## 单行注释

* 注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

:::: code-group
::: code-group-item 正例
```css
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```
:::
::: code-group-item 反例
```css
/*Comment Text*/
.jdc{
	display: block;
}
.jdc{
	display: block;/*Comment Text*/
}
```
:::
::::

## 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行

:::: code-group
::: code-group-item 正例
```css
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```
:::
::: code-group-item 反例
```css
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```
:::
::::

## 文件信息注释

在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息

```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```