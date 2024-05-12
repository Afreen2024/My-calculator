#! /usr/bin/env node
import inquirer from "inquirer";
//ASKING QUESTION
let answers = await inquirer.prompt([
    { messeage: "enter 1st number", type: "number", name: "firstNumber" },
    { messeage: "enter 2nd number", type: "number", name: "secondNumber" },
    {
        message: "select one operator 4 operation",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
console.log(answers);
//if conditional statment
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "substraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("invalid input");
}
