# 注释规范
> 京东凹凸实验室前端规范;
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:

## 遵循标准

:::: code-group
::: code-group-item 正例
```html
<!--Comment Text-->
```
:::
::: code-group-item 反例
```html
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```
:::
::::

## 单行注释
* 一般用于简单的描述，如某些状态描述、属性描述等
* 注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

:::: code-group
::: code-group-item 正例
```html
<!-- Comment Text -->
<div>...</div>
```
:::
::: code-group-item 反例
```html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```
:::
::::

## 模块注释

* 一般用于描述模块的名称以及模块开始与结束的位置

* 注释内容前后各一个空格字符，<!-- S Comment Text --> 表示模块开始，<!-- E Comment Text --> 表示模块结束，模块与模块之间相隔一行

:::: code-group
::: code-group-item 正例
```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```
:::
::: code-group-item 反例
```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```
:::
::::

## 嵌套模块注释

* 当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用
```html
<!-- S Comment Text -->
<!-- E Comment Text -->
```

改用
```html
<!-- /Comment Text -->
```
* 注释写在模块结尾标签底部，单独一行。

``` html
<!-- S Comment Text A -->
<div class="mod_a">
		
    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->
    	
    <div class="mod_c">
    	...
    </div>
    <!-- /mod_c -->
		
</div>
<!-- E Comment Text A -->

```