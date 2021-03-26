let readline = require("readline-sync");


console.log("Please enter an integer greater than 0");
let number = readline.prompt();


let operator;

do {
  console.log("Enter 's' to compute the sum, or 'p' to compute the product");
  operator = readline.prompt().toLowerCase();

} while (!['s', 'p'].includes(operator))

if (operator === 's') {
  printSum(Number(number));
} else {
  printProduct(number);
}



function printSum(ceiling) {
  let sum = 0;
    for (let i = ceiling ; i >= 1; i--) {
      sum += i;
    }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
}


function printProduct(ceiling) {
  let total = 1;
    for (let i = 1 ; i <= ceiling; i++) {
      total = total *  i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${total}.`);
}