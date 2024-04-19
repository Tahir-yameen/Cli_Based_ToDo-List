#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDoList = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t ~^~^~^~^~^ Welcome to my Cli based ToDo_List ^~^~^~^~^~ \n"));
let funmain = async () => {
    while (conditions) {
        let category = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: (chalk.magenta.bold("Please Select Your Option:- ")),
                choices: ["Add Task", "Update Task", "Delete Task", "View ToDo-List", "Exit"],
            }
        ]);
        if (category.options === "Add Task") {
            await addTask();
        }
        else if (category.options === "Delete Task") {
            await delTask();
        }
        else if (category.options === "Update Task") {
            await updateTask();
        }
        else if (category.options === "View ToDo-List") {
            await viewTask();
        }
        else if (category.options === "Exit") {
            conditions = false;
        }
    }
};
// Function for adding new task:
let addTask = async () => {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: (chalk.magenta.bold("Please Enter Your New Task:-"))
        }
    ]);
    toDoList.push(addTask.task);
    console.log(chalk.red.bold(`\n${addTask.task}`), `Task Added To Your ToDo-List Successfully:- \n`);
};
// Function for viewing ToDo-List task:
let viewTask = () => {
    console.log(`\n Your ToDo-List:- \n`);
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
// Function for deleting tasks:
let delTask = async () => {
    await viewTask();
    let taskDelete = await inquirer.prompt([
        {
            name: "sno",
            type: "number",
            message: chalk.magenta.bold("Please Enter The 'Serial No.' Of The Task To Delete:-"),
        }
    ]);
    let taskDeleted = toDoList.splice(taskDelete.sno - 1, 1);
    console.log(`\n ${taskDeleted} This Task Has Been Deleted Succesfully From Your ToDo-List \n`);
};
//Function for Updating Task:
let updateTask = async () => {
    await viewTask();
    let taskUpdate = await inquirer.prompt([
        {
            name: "utask",
            type: "number",
            message: chalk.magenta.bold("Please Enter The 'Serial No.' Of The Task You Want To Update:-"),
        },
        {
            name: "newutask",
            type: "input",
            message: chalk.magenta.bold("Please Enter The New Task:-"),
        }
    ]);
    toDoList[taskUpdate.utask - 1] = taskUpdate.newutask;
    console.log(`\n Task at the S.no ${taskUpdate.utask} Updated Successfully [For Updated List Check Option: 'View ToDo-List']\n`);
};
funmain();
