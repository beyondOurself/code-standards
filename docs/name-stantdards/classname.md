# ClassName 命名

> 京东凹凸实验室前端开发规范;

# 概览 :clipboard:

 [[toc]]

# 内容 :japanese_ogre:

ClassName 的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线 “-” 连接,模块直接用“\_” 连接,

## 基于姓氏命名法 （继承 + 外来）

祖先模块不能出现下划线，除了是全站公用模块，如 mod\_ 系列的命名：

:::: code-group
::: code-group-item 正例

```js
<div class="modulename">
	<div class="modulename_info">
		<div class="modulename_son"></div>
		<div class="modulename_son"></div>
		...
	</div>
</div>

<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod_info">
	<div class="mod_info_son"></div>
	<div class="mod_info_son"></div>
	...
</div>
```

:::
::: code-group-item 反例

```js
<div class="modulename_info">
  <div class="modulename_info_son"></div>
  <div class="modulename_info_son"></div>
  ...
</div>
```

:::
::::

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

```html
<div class="modulename">
  <div class="modulename_cover"></div>
  <div class="modulename_info"></div>
</div>
```

当子孙模块**超过 4 级或以上**的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

:::: code-group
::: code-group-item 正例

```html
<div class="modulename">
  <div class="modulename_cover"></div>
  <div class="modulename_info">
    <div class="modulename_info_user">
      <div class="modulename_info_user_img">
        <img src="" alt="" />
        <!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
        <div class="miui_tit"></div>
        <div class="miui_txt"></div>
        ...
      </div>
    </div>
    <div class="modulename_info_list"></div>
  </div>
</div>
```

:::
::: code-group-item 反例

```html
<div class="modulename">
  <div class="modulename_cover"></div>
  <div class="modulename_info">
    <div class="modulename_info_user">
      <div class="modulename_info_user_img">
        <img src="" alt="" />
        <div class="modulename_info_user_img_tit"></div>
        <div class="modulename_info_user_img_txt"></div>
        ...
      </div>
    </div>
    <div class="modulename_info_list"></div>
  </div>
</div>
```

:::
::::

### 模块命名

全站公共模块：以 mod\_ 开头

```html
<div class="mod_yours"></div>
```

业务公共模块：以 业务名*mod* 开头

```html
<div class="paipai_mod_yours"></div>
```

### 常用命名推荐

注意：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做 ClassName，因为有些浏览器插件（Chrome 的广告拦截插件等）会直接过滤这些类名，因此

```html
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，敏感不和谐字眼也不应该出现，如：

```html
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div>
<div class="ass"></div>
<div class="KMT"></div>
```

|       ClassName        |                   含义                   |
| :--------------------: | :--------------------------------------: |
|         about          |                   关于                   |
|        account         |                   账户                   |
|         arrow          |                 箭头图标                 |
|        article         |                   文章                   |
|         aside          |                   边栏                   |
|         audio          |                   音频                   |
|         avatar         |                   头像                   |
|     bg,background      |                   背景                   |
|          bar           |               栏（工具类）               |
|        branding        |                  品牌化                  |
|   crumb,breadcrumbs    |                  面包屑                  |
|       btn,button       |                   按钮                   |
|        caption         |                标题，说明                |
|        category        |                   分类                   |
|         chart          |                   图表                   |
|        clearfix        |                 清除浮动                 |
|         close          |                   关闭                   |
|       col,column       |                    列                    |
|        comment         |                   评论                   |
|       community        |                   社区                   |
|       container        |                   容器                   |
|        content         |                   内容                   |
|       copyright        |                   版权                   |
|        current         |              当前态，选中态              |
|        default         |                   默认                   |
|      description       |                   描述                   |
|        details         |                   细节                   |
|        disabled        |                  不可用                  |
|         entry          |                文章，博文                |
|         error          |                   错误                   |
|          even          |       偶数，常用于多行列表或表格中       |
|          fail          |               失败（提示）               |
|        feature         |                   专题                   |
|         fewer          |                   收起                   |
|         field          |            用于表单的输入区域            |
|         figure         |                    图                    |
|         filter         |                   筛选                   |
|         first          |           第一个，常用于列表中           |
|         footer         |                   页脚                   |
|         forum          |                   论坛                   |
|        gallery         |                   画廊                   |
|         group          |              模块，清除浮动              |
|         header         |                   页头                   |
|          help          |                   帮助                   |
|          hide          |                   隐藏                   |
|       hightlight       |                   高亮                   |
|          home          |                   主页                   |
|          icon          |                   图标                   |
|    info,information    |                   信息                   |
|          last          |          最后一个，常用于列表中          |
|         links          |                   链接                   |
|         login          |                   登录                   |
|         logout         |                   退出                   |
|          logo          |                   标志                   |
|          main          |                   主体                   |
|          menu          |                   菜单                   |
|          meta          | 作者、更新时间等信息栏，一般位于标题之下 |
|         module         |                   模块                   |
|          more          |               更多（展开）               |
|      msg,message       |                   消息                   |
|     nav,navigation     |                   导航                   |
|          next          |                  下一页                  |
|          nub           |                   小块                   |
|          odd           |       奇数，常用于多行列表或表格中       |
|          off           |                 鼠标离开                 |
|           on           |                 鼠标移过                 |
|         output         |                   输出                   |
|       pagination       |                   分页                   |
|       pop,popup        |                   弹窗                   |
|        preview         |                   预览                   |
|        previous        |                  上一页                  |
|        primary         |                   主要                   |
|        progress        |                  进度条                  |
|       promotion        |                   促销                   |
| rcommd,recommendations |                   推荐                   |
|      reg,register      |                   注册                   |
|          save          |                   保存                   |
|         search         |                   搜索                   |
|       secondary        |                   次要                   |
|        section         |                   区块                   |
|        selected        |                   已选                   |
|         share          |                   分享                   |
|          show          |                   显示                   |
|        sidebar         |                边栏，侧栏                |
|         slide          |             幻灯片，图片切换             |
|          sort          |                   排序                   |
|          sub           |              次级的，子级的              |
|         submit         |                   提交                   |
|       subscribe        |                   订阅                   |
|        subtitle        |                  副标题                  |
|        success         |               成功（提示）               |
|        summary         |                   摘要                   |
|          tab           |                  标签页                  |
|         table          |                   表格                   |
|        txt,text        |                   文本                   |
|       thumbnail        |                  缩略图                  |
|          time          |                   时间                   |
|          tips          |                   提示                   |
|         title          |                   标题                   |
|         video          |                   视频                   |
|          wrap          |         容器，包，一般用于最外层         |
|        wrapper         |         容器，包，一般用于最外层         |

## BEM 命名法

- BEM 其实是块（block）、元素（element）、修饰符（modifier）的缩写

- block 代表更高级别的抽象或组件
- block\_\_element 代表 block 的后代，用于形成一个完整的 block 的整体
- block--modifier 代表 block 的不同状态或不同版本

```css
.block {
}
.block__element {
}
.block--modifier {
}
```

### 常用规范

1. blockelementmodifier 包含多个单词时, 用一个中划线-链接,例如
2. el-dropdown-menuel-button
3. block 和 element 用双下划线\_\_链接, 例如
4. 表单项 form\_\_item
5. 导航项 menu\_\_item
6. element 和 modifier 用双中划线--链接, 如表示按钮的不同状态,例如
7. 默认：el-button--default
8. 成功：el-button--success
9. 用 js 控制样式时,css 命名用 is-开头,例如 is-success、is-failed、is-disabled

### 常用的元素名

- 表单元素 form form-item input select radio checkbox switch rate datePicker
- 导航元素 nav subnav menu tab
- 提示 alert message messageBox notification
- 数据展示 table process tree pagiantion
- 其他 button icon

### 如何用好 BEM 命名法

#### 页面命名

用 page-开头, page 表示这是一个页面, 而不是组件。 给页面命名时，BEM 可以搭配 css-module 一起使用。既能保证打包后选择器的唯一，又容易调试。例如

```css
# 编译前 .page-index {
}
.page-zufang {
}

# 编译后 .page-index-70yGFBg1eKjbSIwN {
}
.page-zufang-mFTy62A1t83zjDbh {
}
```

#### 公共组件命名

- 用 base-开头, base 表示公共组件。

- 公共组件的每一个 class 名，带上组件的作用域前缀,如 base-input\_\_inner 的作用域前缀是 base-input。

- 选择器不宜嵌套, 让选择器的权重尽可能低。原因如下: base-input\_\_inner 已经具有有作用域了，无需再嵌套。 由于组件选择器权重较低，在组件外修改组件样式时，覆盖样式非常方便。

```css
<div
  class="base-input"
  > <input
  class="base-input__inner"/
  > </div
  > #
  选择器避免嵌套，降低选择器权重
  .base-input {
}
.base-input__inner {
}
```

### 局部组件命名

- 用 the-开头, the 表示某一特定的组件。

```css
<div
  class="the-header"
  > <div
  class="the-header__title"
  /
  > <div
  class="the-header__desc"
  > </div
  > #
  选择器避免嵌套，降低选择器权重
  .the-header {
}
.the-header__title {
}
.the-header__desc {
}
```

## 个人约束

###  常见用法

* 模块前缀后加__
* 多个单词以-隔开
* 不同模块以_隔开
* 模块修饰符 --
* 嵌套 大于3层考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

``` js
模块前缀__模-块-1__模-块-2--修饰词
```

``` js

page__module_module-1_module-1-1--modifier
com__com-1
base__button-1
the__the-1
box__box-1
mod__moda-1
wrap__wrap-1

// 超过三层
com__module
    module_1module
        module_2module-3module
            // 祖先模块独立缩写
            m123_4module

```
### 模块前缀

|前缀|含义|
|:---:|:---:|
|page|页面|
|com|普通组件|
|base|基础组件|
|box|宽度分离时,用于元素尺寸的设置|
|mod|全局公用模块|
|wrap|模块最外层包裹块|

