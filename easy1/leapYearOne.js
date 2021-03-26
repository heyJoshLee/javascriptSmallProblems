let readline = require('readline-sync');


console.log("Enter a year");



let year = Number(readline.prompt());

if (year % 400 === 0) {
  return true;
} else if (year % 100 === 0) {
  return false;
} else if (year % 4 === 0) {
  return true;
} else {
  return false;
}

