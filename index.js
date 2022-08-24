import inquirer from 'inquirer';
import { Manager } from "./lib/Manager.js"
import { Engineer } from "./lib/Engineer.js"
import { Intern } from "./lib/Intern.js"
const employees = []

async function getManager(){
    const questions = [
        {
          type: 'input',
          name: 'name',
          message: "What's the team managers name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your employee id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's your office number?",
        },
      ];
      
    const answers = await inquirer.prompt(questions)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(manager)
    console.log(employees)
}

async function getEmployeeType(){
    const questions = [
        {
          type: 'number',
          name: 'name',
          message: "What's the team managers name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your employee id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's your office number?",
        },
      ];
      
    const answers = await inquirer.prompt(questions)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(manager)
    console.log(employees)
}

async function runProgram() {
    await getManager()
}

runProgram()