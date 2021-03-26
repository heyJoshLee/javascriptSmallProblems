let readline = require('readline-sync');

console.log("First string");
let firstString = readline.prompt();

console.log("Second string");
let secondString = readline.prompt();

let short;
let long;

if (firstString.length > secondString.length) {
  long = firstString;
  short = secondString;
} else if (firstString.length < secondString.length) {
  long = secondString;
  short = firstString; 
}

console.log(short+long+short);
