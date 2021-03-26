let readline = require('readline-sync');

console.log('Give me a number');

let number = Number(readline.prompt());

let sum = 0;

for (let i = 1; i <= number; i ++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
return sum;