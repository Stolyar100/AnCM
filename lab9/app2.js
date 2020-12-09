const math = require('mathjs')

function f1(x1, x2) {
  return x1 - 2*x**2 + 7
}

function f2(x1, x2) {
  return 1.5*x1**2 - 0.75*x2
}


// take x1 out of equation 1
function x1(x2) {
  return 2*x2**2 - 7
}


// take x2 out of equation 2
function x2(x1) {
  return (1.5*x1**2) / 0.75
}

const x = [0.5, 1.5]
const e = 0.001

let tempE = 0
let iterationsCount = 0
let x1Val = x[0]
let x2Val = x[1]
let res1, res2, tempE1, tempE2

// the loop will end wheh accuracy is reached
do {
  // increment iteration counter
  iterationsCount++

  // find new x1 and x2
  res1 = x1(x2Val)
  res2 = x2(x1Val)

  // calculate current accuracies
  tempE1 = math.abs(0 - f1(res1, res2))
  tempE2 = math.abs(0 - f2(res1, res2))

  // choose the least accuracy
  tempE = tempE1
  if (tempE > tempE2) {
    tempE = tempE2
  }

  // saving new values for next oteration
  x1Val = res1
  x2Val = res2
} while (tempE > e)

console.log('x1 = ', x1Val)
console.log('x2 = ', x2Val)
console.log('Кількість ітерацій: ', iterationsCount)