#!/usr/bin/env node
import { execa } from 'execa';
import chalk from 'chalk'
import fs from 'fs'
import questions from './questions/index.js';
import createPackageTemplate from './createPackageTemplate.js'
import { copyDir} from './utils/index.js'
const inputConfig = await questions()
const getRootPath =  ()=>{
    return `./${inputConfig.name}` || 'project'
}
const rootPath = getRootPath()
console.log(chalk.blue("创建项目"))
//拷贝 doc目录
fs.mkdirSync(rootPath)
console.log(chalk.blue("加载文件"))
copyDir('./docs', `${rootPath}/docs`, err => {
    if (err) {
        console.log(chalk.red("拷贝doc目录异常"), err)
    }
})
// 拷贝 .github
copyDir('./.github', `${rootPath}/.github`, err => {
    if (err) {
        console.log(chalk.red("拷贝 .github异常"), err)
    }
})
// 拷贝 gitignore
fs.copyFile('./.gitignore', `${rootPath}/.gitignore`, err => {
    if (err) {
        console.log(chalk.red("拷贝 gitignore 异常"),err)
    }
 })

// 创建 package.json 
fs.writeFileSync(`${rootPath}/package.json`, createPackageTemplate(inputConfig))
console.log(chalk.blue("安装依赖"))
// 安装依赖
execa("npm i", {
    cwd: rootPath,
    stdio:[2,2,2]
})

//  TODO