import { Manager } from "./lib/Manager"
import { Engineer } from "./lib/Engineer"
import { Intern } from "./lib/Intern"

export function runProgram() {
const newManager = new Manager('Billy Jo', 123, "bill@gmail.com", 123)

console.log(newManager.getEmail())
console.log(newManager.getId())
console.log(newManager.getRole())
}

runProgram()

