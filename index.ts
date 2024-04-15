#! /usr/bin/env node

import inquirer from "inquirer"

let todos = []
let condition = true

while(condition)
{
let todoslist = await inquirer.prompt(
    [
        { 
            name:"firstquestion",
            type:"input",
            message:"please enter the field you want to add in your todos list?"
        },
        {
            name: "secondquestion",
            type: "confirm",
            message: "would you like to add more item in your todos list",
            default: "true"
        }
    ]
)
todos.push(todoslist.firstquestion)
console.log(todos)
condition = todoslist.secondquestion
}
console.log("thankyou for using todosapp")
