# 移动端常用私有属性
> 京东凹凸实验室前端开发规范; 
# 概览 :clipboard:
 
[[toc]]
---
# 内容 :japanese_ogre:


* 目前两大主流移动平台为 iOS 和 Android，有不少带 -webkit- 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。

* WebKit CSS 属性中的一部分已经被包含在 CSS 规范草案中，并且可能成为最后的推荐标准，但目前仍然是试验性的属性，还有一些属性是不规范的属性，它们没有出现在跟踪规范中。


## -webkit-scrollbar

-webkit-scrollbar 是-webkit-私有的伪元素，用于对拥有overflow属性的区域 **自定义滚动条的样式**。


譬如，为了隐藏滚动条，你可以这么做：

```css
.scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
}
```

## 滚动条各块组成表现渲染的伪元素

一般而言，滚动条的主要组成部分包括：

* 滚动按钮 — 滚动按钮的夹角则被称为滚动角(corner)。
* 轨道 — 轨道(track)可以进一步分为轨枕(track pieces) 和滑块(thumb)。

Webkit则根据滚动条各组成部分，提供了不同的伪元素来自定义样式。

```css
::-webkit-scrollbar              { /* 1 */ }
::-webkit-scrollbar-button       { /* 2 */ }
::-webkit-scrollbar-track        { /* 3 */ }
::-webkit-scrollbar-track-piece  { /* 4 */ }
::-webkit-scrollbar-thumb        { /* 5 */ }
::-webkit-scrollbar-corner       { /* 6 */ }
::-webkit-resizer                { /* 7 */ }

```

::-webkit-scrollbar：滚动条整体部分。可设置width、height、background、border等。

::-webkit-scrollbar-button：滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

::-webkit-scrollbar-track：轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

::-webkit-scrollbar-track-piece：轨枕，也就是除去滚动滑块的部分。

::-webkit-scrollbar-thumb：滚动滑块，也就是滚动条里面可以拖动的那部分。

::-webkit-scrollbar-corner：滚动按钮的夹角则被称为滚动角。

::-webkit-resizer：用于定义右下角拖动块的样式。

**需要注意的是：**若是水平滚动条，则width属性不起作用，height属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则height属性不起作用，width属性用来控制相应部分的宽度。