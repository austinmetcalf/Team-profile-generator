import inquirer from 'inquirer';
import { Manager } from "./lib/Manager.js"
import { Engineer } from "./lib/Engineer.js"
import { Intern } from "./lib/Intern.js"
import { employeeToHtml } from './src/employeeToHtml.js';
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
}

async function getEmployeeType(){
    const questions = [
        {
            type: 'list',
            name: 'EmployeeType',
            message: 'What do you want to do next?',
            choices: ['Add engineer', 'Add intern', 'Finish'],
        },
      ];
      
    const answers = await inquirer.prompt(questions)
    console.log(answers.EmployeeType)

    if (answers.EmployeeType === 'Add engineer'){
        await getEngineer() 
        getEmployeeType()
    }
    if (answers.EmployeeType === 'Add intern'){
        await getIntern()
        getEmployeeType()
    }
    if (answers.EmployeeType === 'Finish'){
       employeeToHtml(employees)
    }
}

async function runProgram() {
    await getManager()
    await getEmployeeType()
}
async function getEngineer(){
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What's the engineers name?",
          },
          {
              type: 'input',
              name: 'id',
              message: "What's your engineer's id?",
          },
          {
              type: 'input',
              name: 'email',
              message: "What's your engineer's email address?",
          },
          {
              type: 'input',
              name: 'github',
              message: "What's your engineer's Github?",
          },
        ];
        const answers = await inquirer.prompt(questions)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(engineer)
    };
    async function getIntern(){
        const questions = [
            {
              type: 'input',
              name: 'name',
              message: "What's the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What's your intern's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's your intern's email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What's your school?",
            },
          ];
          
        const answers = await inquirer.prompt(questions)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(intern)
    };
    
runProgram()