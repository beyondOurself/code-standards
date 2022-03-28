# WebApp Meta
> 京东凹凸实验室前端开发规范;
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:

## WebApp Meta 标签设置(iOS)

* WebApp目的在于使其界面和行为在某种程度上类似于原生APP应用。
* 例如，WebApp 可以在 iOS 设备上通过缩放去适配设备屏幕。
* 当用户将WebApp程序添加到主屏幕后，会使得它看上去像原生APP一样，以此，你可以进一步为 Safari 定制自己的 WebApp，而使用某些专为 iOS 平台设定的设置就可以做到。

* WebApp可以通过设置 meta 标签来改变页面的一些表现，有些 meta 设置在 Safari 应用或原生 App 的内嵌网页中都可以生效，而有些设置侧需要将应用添加到主屏幕的时候才会生效。

## Viewport Meta Tag

### 通用类设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, 
maximum-scale=1.0, user-scalable=no">
```

* width – viewport的宽度
* height – viewport的高度
* initial-scale – 初始的缩放比例
* minimum-scale – 允许用户缩放到的最小比例
* maximum-scale – 允许用户缩放到的最大比例
* user-scalable – 是否允许用户缩放

### Safari on iOS viewport

* 默认宽度是 980px，范围从 200px 到 10000px
* initial-scale 缩放比例范围值是 从 >0 到 10 之间
* minimum-scale 默认值是 0.25
* maximum-scale 默认值是 5
* user-scalable – 默认值是 yes，设置 no 还可以在文本框输入文本的时候阻止页面滚动

## Apple-Specific Meta Tag Keys

### apple-mobile-web-app-capable
* 设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效
```html
<meta name="apple-mobile-web-app-capable" content="yes">
```

* content设置 yes 进入全屏模式
* 默认会启动 Safari 应用，使用 Safari 应用浏览
* 通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模* 式

### apple-mobile-web-app-status-bar-style
* 为 webapp 设置状态栏样式
```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```
* 该设置在 iOS6 和 iOS7 表现还可以，但到了 **iOS8 后会出现各种问题**，而且在 iOS9 中并没有生效。
* 此 meta 设置只在全屏模式生效
* 默认值是 default
* content=”black”，状态栏背景黑色，网页内容在状态栏下面
* content=”black-translucent”，状态栏半透明，背景黑色，网页内容占满全屏

### format-detection

* 自动识别页面中有可能是电话格式的数字
* iOS中的 Safari 会默认识别与电话格式相似的数字并生成一个可以拉起电话应用并将该数字作为电话号码拨打的链接。定义 telephone=no 可以屏蔽该功能

```html
<meta name="format-detection" content="telephone=no">
```
