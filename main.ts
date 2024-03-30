#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\tWellcome to codewithSB - Cli Number Guessing Game.\n");

let randomNumber = Math.floor(Math.random() * 5 + 1);

let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number(Number limit 1 to 5)",
    },
]);
if (answer.userGuessedNumber === randomNumber){
console.log("Congratulation ! You guessed a correct Number.");
}
else{
    console.log("Sorry, You guessed a Wrong Number.");
}
