const { path } = require('@vuepress/utils')
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '文档',
    description: '前端编码规范',
    base:'/code-standards/',
    // 主题和它的配置
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
        logo: '/hero.png',
        navbar: [
            {
                text: '内容',
                children: [
                    {
                        text: '开始使用',
                        link: '/get-started/',
                        activeMatch:'/get-started/'
                    },
                    {
                        text: 'HTML规范',
                        link: '/html-standards/',
                        activeMatch: '/html-standards/'

                    },
                    {
                        text: '图片规范',
                        link: '/image-standards/',
                        activeMatch: '/image-standards/'

                    },
                    {
                        text: 'CSS规范',
                        link: '/css-standards/',
                        activeMatch: '/css-standards/'

                    },
                    {
                        text: '命名规范',
                        link: '/name-stantdards/',
                        activeMatch: '/name-stantdards/'

                    },
                    {
                        text: 'JS规范',
                        link: '/js-standards/',
                        activeMatch: '/js-standards/'

                    },
                    {
                        text: 'React书写规范',
                        link: '/react-standards/',
                        activeMatch: '/react-standards/'

                    },
                    {
                        text: 'Vue书写规范',
                        link: '/vue-standards/',
                        activeMatch: '/vue-standards/'

                    },
                    
                ]
            },
            {
                text: '参考',
                children: [
                    {
                     text: '京东凹凸实验室前端代码规范',
                    link:'https://guide.aotu.io/'
                    },
                    {
                        text: '腾讯前端代码规范',
                        link:'http://tgideas.qq.com/doc/index.html'
                    },
                    {
                        text: '阿里前端规范',
                        link:'https://developer.aliyun.com/article/850913'
                        
                    },
                    {
                        text: '网易NEC代码规范',
                        link:'http://nec.netease.com/standard'
                    },
                    {
                        text: '百度前端代码规范',
                        link:'https://github.com/ecomfe/spec'
                    },
                    {
                        text: 'JavaScript Standard Style',
                        link:'https://github.com/standard/standard '
                    },
                    {
                        text: 'Vue官方特有的代码风格指南',
                        link:'https://cn.vuejs.org/v2/style-guide/index.html'
                    },
                    {
                        text: '阮一峰的ES6编程风格',
                        link:'http://es6.ruanyifeng.com/#docs/style'
                    },
                    {
                        text: 'ESLint',
                        link:'https://eslint.bootcss.com/'
                    },
                    {
                        text: 'Prettier',
                        link:'https://prettier.io/'
                    },
                ],
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: '开始使用',
                children: [
                    // SidebarItem
                    {
                        text: '概述',
                        link: '/get-started/',
                    },
                ],
            },
            {
                text: 'HTML规范',
                children: [
                    // SidebarItem
                    {
                        text: '代码规范',
                        link: '/html-standards/',
                    },
                    {
                        text: '注释规范',
                        link: '/html-standards/annotation.md',
                    },
                    {
                        text: '文件模板',
                        link: '/html-standards/template.md',
                    },
                    {
                        text: 'WebAppMeta',
                        link: '/html-standards/webapp.md',
                    },
                ],
            },
            {
                text: '图片规范',
                children: [
                    // SidebarItem
                    {
                        text: '图片格式',
                        link: '/image-standards/format.md',
                    },
                    {
                        text: '图片大小',
                        link: '/image-standards/size.md',
                    },
                    {
                        text: '图片质量',
                        link: '/image-standards/quality.md',
                    },
                    {
                        text: '图片引入',
                        link: '/image-standards/import.md',
                    },
                ],
            },
            {
                text: 'CSS规范',
                children: [
                     {
                        text: '代码规范',
                        link: '/css-standards/',
                    },
                    {
                        text: '注释规范',
                        link: '/css-standards/note.md',
                    },
                    {
                        text: 'SASS规范',
                        link: '/css-standards/sass.md',
                    },
                    {
                        text: 'LESS规范',
                        link: '/css-standards/less.md',
                    },
                    {
                        text: '重置样式',
                        link: '/css-standards/reset.md',
                    },
                    {
                        text: '媒体查询',
                        link: '/css-standards/query.md',
                    },
                    {
                        text: '移动端常用私有属性',
                        link: '/css-standards/webkit.md',
                    }
                ],
            },
            {
                text: '命名规范',
                children: [
                    // SidebarItem
                    {
                        text: '目录或文件命名',
                        link: '/name-stantdards/',
                    },
                    {
                        text: '图片命名',
                        link: '/name-stantdards/image.md',
                    },
                    {
                        text: 'HTML/CSS命名',
                        link: '/name-stantdards/htmlcss.md',
                    },
                    {
                        text: 'ClassName命名',
                        link: '/name-stantdards/classname.md',
                    },
                ],
            },
            {
                text: 'JS规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '/js-standards/',
                    },
                    {
                        text: '代码规范',
                        link: '/js-standards/code',
                    },
                ],
            },
            {
                text: 'React书写规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '',
                    },
                    {
                        text: '代码规范',
                        link: '',
                    },
                ],
            },
            {
                text: 'Vue书写规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '/vue-standards/',
                    },
                    {
                        text: 'Vue 项目目录规范',
                        link: '/vue-standards/directory.md',
                    },
                ],
            },
            {
                text: '自定义规范方案',
                children: [
                    // SidebarItem
                    {
                        text: '参考方案',
                        link: '/self-standards/',
                    },
                    {
                        text: 'React Eslint',
                        link: '/self-standards/react.md',
                    },
                    {
                        text: 'Vue Eslint',
                        link: '/self-standards/vue.md',
                    },
                    {
                        text: 'Base Eslint',
                        link: '/self-standards/base.md',
                    },
                ],
            },
        ],

      
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ]
    ],
    extendsMarkdown: (md, app) => {
        // console.log(md)
        // md.use(plugin1)
        // md.linkify.set({ fuzzyEmail: false })
    },
}