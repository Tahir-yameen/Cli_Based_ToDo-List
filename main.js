#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDoList = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t ~^~^~^~^~^ Welcome to my Cli based ToDo_List ^~^~^~^~^~ \n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: (chalk.magenta.bold("Please Enter Your New Task:- "))
        }
    ]);
    toDoList.push(addTask.task);
    console.log(chalk.red.bold(addTask.task), "Task Added To Your ToDo-List Successfully:- ");
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: (chalk.magenta.bold("Do You Want To Add More Task:- ")),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.green.bold(chalk.red("Your Updated Todo-list:- ")), toDoList);
