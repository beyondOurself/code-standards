import inquirer from 'inquirer'
import input from './input.js'
export default () => {
    
    return inquirer.prompt([
        input()
    ])
    
}