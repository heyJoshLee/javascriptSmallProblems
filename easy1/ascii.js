let readline = require('readline-sync');

console.log("Give me a number");

let string = readline.prompt();

let sum = 0;

for (let i = 0; i < string.length; i++) {
  sum += string.charCodeAt([i]);
}

console.log(sum);
