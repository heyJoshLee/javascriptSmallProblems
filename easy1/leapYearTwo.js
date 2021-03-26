let readline = require('readline-sync');


console.log("Enter a year");



let year = Number(readline.prompt());

function gregorian(number) {
  if (year % 400 === 0) {
    console.log
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

let answer;

if (year > 1752) {
  answer = gregorian(year)
} else {
  answer = year % 4 === 0;
}

console.log(answer);
return answer;