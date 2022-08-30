import * as fs from 'fs'
export function employeeToHtml (employees){
const employeehtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="description" content="Webpage description goes here" />
  <meta charset="utf-8">
  <title>Change_me</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="">
  <link rel="stylesheet" href="css/style.css">
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <style> 
  .employee {
    width: 15%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px;
    display: inline-block;
  }
  .title-header {
    background: blue;
    color: white;
  }
  </style>
</head>

<body>
  
<div class="container">
  ${generateEmployeeHtml(employees)}
</div>

<script>
</script>

</body>
</html>`

fs.writeFile("dist/index.html", employeehtml, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
}

function generateEmployeeHtml(employees) {
    // loop through each employee
    // return a div with employee info
    let result = ''
    for(const employee of employees) {
        let employeeHtml
        if (employee.getRole() === 'Manager'){
            employeeHtml = getManagerHtml(employee)

        }
        if (employee.getRole() === 'Engineer'){
            employeeHtml = getEngineerHtml(employee)
        }
        if (employee.getRole() === 'Intern'){
            employeeHtml = getIntern(employee)
        }
        result +=employeeHtml
    }

    return result
}


function getManagerHtml(employee) {
return `<div class="employee">
<h3 class="title-header">
  ${employee.getName()}: Manager
</h3>
<div>
  <a href="mailto:${employee.getEmail()}">email: ${employee.getEmail()}</a>
</div>
<div>
  office number: ${employee.officeNumber}
</div>
</div>`
}
function getEngineerHtml(employee) {
    return `<div class="employee">
    <h3 class="title-header">
      ${employee.getName()}: engineer
    </h3>
    <div>
      <a href="mailto:${employee.getEmail()}">email: ${employee.getEmail()}</a>
    </div>
    <div>
    <a target="_blank" href="https://github.com/${employee.getGithub()}">Github profile</a>
    </div>
    </div>`
    }
    function getIntern(employee) {
        return `<div class="employee">
        <h3 class="title-header">
          ${employee.getName()}: intern
        </h3>
        <div>
          <a href="mailto:${employee.getEmail()}">email: ${employee.getEmail()}</a>
        </div>
        <div>
        school: ${employee.school}
        </div>
        </div>`
        }