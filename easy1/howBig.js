let readline = require("readline-sync");

console.log("Enter the length of the room in meters:")
let length = readline.prompt();

console.log("Enter the width of the room in meters:")
let width = readline.prompt();


let area = length * width;
let squared = area * 10.7639;

console.log(`The area of the room is ${area} square meters (${squared.toFixed(2)} square feet)`);
