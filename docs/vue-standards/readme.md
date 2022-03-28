# Vue 书写 规范

> 啊里前端开发手册；

# 概览 :clipboard:

[[toc]]

# 内容 :japanese_ogre:

## Vue 编码基础

\*vue 项目规范以 Vue 官方规范 （https://cn.vuejs.org/v2/style-guide/） 中的 A 规范为基础，在 其上面进行项目开发，故所有代码均遵守该规范。 请仔仔细细阅读 Vue 官方规范，切记，此为第一步。

## 组件规范

### 1. 组件名为多个单词

- 组件名应该始终是多个单词组成（大于等于 2），且命名规范为 kebab-case 格式。
- 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个 单词的。

:::: code-group
::: code-group-item 正例

```js
export default { name: 'TodoItem' // ... };
```

:::
::: code-group-item 反例

```js
export default { name: 'Todo', // ... }
export default { name: 'todo-item', // ... }
```

:::
::::

### 2. 组件文件名为 pascal-case 格式

:::: code-group
::: code-group-item 正例

```js
components/ |- my-component.vue
```

:::
::: code-group-item 反例

```js
components/ |- myComponent.vue |- MyComponent.vue
```

:::
::::

### 3. 基础组件文件名为 base 开头，使用完整单词而不是缩写

:::: code-group
::: code-group-item 正例

```js
components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
```

:::
::: code-group-item 反例

```js
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

:::
::::

### 4. 和父组件紧密耦合的子组件应该以父组件名作为前缀命名

:::: code-group
::: code-group-item 正例

```js
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
```

:::
::: code-group-item 反例

```js
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue （使用了缩写）
```

:::
::::

### 5. 在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用 自闭合组件

:::: code-group
::: code-group-item 正例

```HTML
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent /> <Row><table :column="data"/></Row>
```

:::
::: code-group-item 反例

```HTML
<my-component /> <row><table :column="data"/></row>
```

:::
::::

### 6. 组件的 data 必须是一个函数

- 当在组件中使用 data 属性的时候（除了 new Vue 外的任何地方），它的值必须是返回一个对 象的函数。
- 因为如果直接是一个对象的话，子组件之间的属性值会互相影响。

:::: code-group
::: code-group-item 正例

```js
export default {
  data() {
    return { name: "jack" }
  },
}
```

:::
::: code-group-item 反例

```js
export default { data: { name: "jack" } }
```

:::
::::

### 7. Prop 定义应该尽量详细

- 必须使用 camelCase 驼峰命名
- 必须指定类型
- 必须加上注释，表明其含义
- 必须加上 required 或者 default，两者二选其一
- 如果有业务需要，必须加上 validator 验证

:::: code-group
::: code-group-item 正例

```js
props: {
    // 组件状态，用于控制组件的颜色
     status: {
          type: String, required: true,
           validator: function (value) { return [ 'succ', 'info', 'error' ].indexOf(value) !== -1 } },
     // 用户级别，用于显示皇冠个数 userLevel：
     {
        type: String,
        required: true
    }

}
```

:::
::::

### 8. 为组件样式设置作用域

:::: code-group
::: code-group-item 正例

````Vue
<template>
     <button class="btn btn-close">X</button>
</template>
<!-- 使用 `scoped` 特性 -->
<style scoped> .btn-close { background-color: red; } </style>
:::
::: code-group-item 反例
``` vue
<template>
<button class="btn btn-close">X</button>
</template>
<!-- 没有使用 `scoped` 特性 -->
<style> .btn-close { background-color: red; } </style>
````

:::
::::

### 9. 如果特性元素较多，应该主动换行

:::: code-group
::: code-group-item 正例

```vue
<MyComponent
  foo="a"
  bar="b"
  baz="c"
  foo="a"
  bar="b"
  baz="c"
  foo="a"
  bar="b"
  baz="c"
/>
```

:::
::: code-group-item 反例

```vue
<MyComponent
  foo="a"
  bar="b"
  baz="c"
  foo="a"
  bar="b"
  baz="c"
  foo="a"
  bar="b"
  baz="c"
  foo="a"
  bar="b"
  baz="c"
/>
```

:::
::::

## 模板中使用简单的表达式

- 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
- 复杂表达式会 让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。
- 而 且计算属性和方法使得代码可以重用。

:::: code-group
::: code-group-item 正例

```vue
<template>
  <p>{{ normalizedFullName }}</p>
</template>
// 复杂表达式已经移入一个计算属性 <
<script>
export default {
  computed: {
    normalizedFullName: function () {
      return this.fullName
        .split(" ")
        .map(function (word) {
          return
          word[0].toUpperCase() + word.slice(1)
        })
        .join(" ")
    },
  },
}
</script>
>
```

:::
::: code-group-item 反例

```vue
<template>
  <p>
    {{
      fullName
        .split(" ")
        .map(function (word) {
          return word[0].toUpperCase() + word.slice(1)
        })
        .join(" ")
    }}
  </p>
</template>
```

:::
::::

## 指令都使用缩写形式

- 指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)

:::: code-group
::: code-group-item 正例

```HTML
<input @input="onInput" @focus="onFocus" >
```

:::
::: code-group-item 反例

```HTML
<input v-on:input="onInput" @focus="onFocus" >
```

:::
::::

## 标签顺序保持一致

- 单文件组件应该总是让标签顺序保持为

:::: code-group
::: code-group-item 正例

```HTML
<template>...</template>
<script>...</script>
<style>...</style>
```

:::
::: code-group-item 反例

```HTML
<template>...</template>
<style>...</style>
<script>...</script>
```

:::
::::

## 必须为 v-for 设置键值 key

## v-show 与 v-if 选择

- 如果运行时，需要非常频繁地切换，使用 v-show ；
- 如果在运行时，条件很少改变，使用 v-if。

## script 标签内部结构顺序

name >
components > mixins > props > data > computed > watch > filter >
钩子函数（钩子函数按其 执行顺序） > methods

## Vue Router 规范

### 1.页面跳转数据传递使用路由参数

页面跳转，

- 例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，
  - 推荐使用 路由 参数进行传参，而不是将需要传递的数据保存 vuex，
  - 然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。

:::: code-group
::: code-group-item 正例

```js
let id = " 123"
this.$router.push({ name: "userCenter", query: { id: id } })
```

:::
::::

### 2.使用路由懒加载（延迟加载）机制

:::: code-group
::: code-group-item 正例

```js
{
    path: '/uploadAttachment',
    name: 'uploadAttachment',
    meta: { title: '上传附件' },
    component: () => import('@/view/components/uploadAttachment/index.vue') }
```

:::
::::

### 3.router 中的命名规范

- path、childrenPoints 命名规范采用 kebab-case 命名规范（尽量 vue 文件的目录结构保持一致， 因为目录、文件名都是 kebab-case，这样很方便找到对应的文件）
- name 命名规范采用 kebab-case 命名规范且和 component 组件名保持一致！（因为要保持 keep-alive 特性，keep-alive 按照 component 的 name 进行缓存，所以两者必须高度保持一致）

:::: code-group
::: code-group-item 正例

```js
// 动态加载
export const reload =
 [
     {
          path: '/reload',
           name: 'reload',
           component: Main,
           meta: { title: '动态加载',
           icon: 'icon iconfont' },
          children: [
                {
                path: '/reload/smart-reload-list',
                name: 'SmartReloadList',
                meta: { title: 'SmartReload',
                childrenPoints:
                [
                        {
                            title: '查询',
                            name: 'smart-reload-search'
                        },
                       {
                            title: '执行 reload',
                            name: 'smart-reload-update'
                        },
                        {
                            title: '查看执行结果',
                            name: 'smart-reload-result'
                       }
                ]
 },
    component: () = >import('@/views/reload/smart-reload/smart-reload-list.vue') }]
```

:::
::::

### 4.router 中的 path 命名规范

- path 除了采用 kebab-case 命名规范以外，必须以 / 开头，即使是 children 里的 path 也要以 / 开 头。
- 目的： 经常有这样的场景：某个页面有问题，要立刻找到这个 vue 文件，如果不用以/开头，path 为 parent 和 children 组成的，可能经常需要在 router 文件里搜索多次才能找到，而如果以/开头，则能立 刻搜索到对应的组件。

:::: code-group
::: code-group-item 正例

```js
   { 
       path: '/file', 
       name: 'File', 
       component: Main, 
       meta: { 
           title: '文件服务', 
           icon: 'ios-cloud-upload' 
           },
        children: [
            { 
                path: '/file/file-list', 
                name: 'FileList', 
                component: () = >import('@/views/file/file-list.vue') 
            },
           { 
                    path: '/file/file-add', 
                    name: 'FileAdd', 
                    component: () = >import('@/views/file/file-add.vue') 
                },
            { 
                     path: '/file/file-update',
                    name: 'FileUpdate',
                    component: () = >import('@/views/file/file-update.vue') 
             }
             ] 
        }
```

:::
::::



