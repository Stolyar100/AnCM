const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter A, to spit elements use " " and ", " to split rows: ', (answer) => {
  let A = answer.split(', ').map(row => row.split(' ').map(Number))
  console.log(A)
  rl.close();
});