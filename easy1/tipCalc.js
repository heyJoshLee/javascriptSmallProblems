let readline = require("readline-sync");


console.log("What is the bill?")
let bill = readline.prompt();

console.log("What is the tip percentage? Ex: 0.15");
let percentage = readline.prompt();

let tip = bill * percentage;
let total = Number(bill) + Number(tip);

console.log(`The tip is $${tip}`)
console.log(`The total is $${total}`)