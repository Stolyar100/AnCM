const math = require('mathjs')

let a = -math.pi
let b = math.pi / 2
let accuracy = 0.001

// console.log('bisectionMethodResult')
// const bisectionMethodResult = bisectionMethod(a, b, accuracy)
// printResult(bisectionMethodResult)

// console.log('a', a)
// console.log('b', b)
// console.log('secondDerivativeF(a)',secondDerivativeF(a))
// console.log('secondDerivativeF(b)',secondDerivativeF(b))
// console.log('f(a)', f(a))
// console.log('f(b)', f(b))
// console.log('derivativeF(a)',derivativeF(a))
// console.log('derivativeF(b)',derivativeF(b))

// console.log('simpleIterstionMethodResult')
// const simpleIterstionMethodResult = simpleIterstionMethod(a, b, accuracy)
// printResult(simpleIterstionMethodResult)

console.log('tangentМethodResult')
const tangentМethodResult = tangentМethod(a, b, accuracy)
printResult(tangentМethodResult)

console.log('chordМethodResult')
const chordМethodResult = chordМethod(a, b, accuracy)
printResult(chordМethodResult)

console.log('combinedMethodResult')
const combinedMethodResult = combinedMethod(a, b, accuracy)
printResult(combinedMethodResult)



function bisectionMethod (a, b, accuracy) {
  let iterationCount = 0
  let x
  let result
  do {
    x = (a + b) / 2
    result = f(x)
    if (result > 0) {
      a = x
    } else {
      b = x
    }
    iterationCount++
  } while (result > accuracy || (b - a) > (2 * accuracy))
  return {x, iterationCount}
}

function simpleIterstionMethod (a, b, accuracy) {
  let iterationCount = 0
  let x = (a + b) / 2
  let x_1 = f(x)
  while (math.abs(x_1 - x) > accuracy) {
    x = x_1
    x_1 = f(x);
    iterationCount++
  }
  x = x_1
  return {x, iterationCount}
}

function tangentМethod (a, b, accuracy) {
  let x
  let iterationCount = 0
  if (f(a) * secondDerivativeF(a) > 0) x = a
  else if (f(b) * secondDerivativeF(b) > 0) x = b
  else return {x: null, iterationCount}
  do {
    x -= f(x) - derivativeF(x)
    iterationCount++
  }
  while (math.abs(f(x)) < accuracy)
  return {x, iterationCount}
}

function chordМethod (a, b, accuracy) {
  let x
  let iterationCount = 0
  if (f(a) * secondDerivativeF(a) > 0) {
    x = a
    a = b
    b = x
  } else if (f(b) * secondDerivativeF(b) > 0) x = b
  else return {x: null, iterationCount}
  x = a
  a = b
  while (math.abs(x - a) < accuracy) {
    a = x
    x = a - (f(a) * (b - a)) / (f(b) - f(a))
    iterationCount++
  }
  return {x, iterationCount}
}

function combinedMethod (a, b, accuracy) {
  let x, c2, d2
  let iterationCount = 0
  do {
    T = derivativeF(a)
    F = secondDerivativeF(b)
    if ((F * T) > 0) {
      c1 = a
      d1 = b
    } else {
      c1 = b
      d1 = a
    }
    R = f(c1)
    Q = f(d1)
    T = f(d1)
    c2 = c1 * R * (d1 * c1) / (Q * R)
    d2 = d1 * Q / T
    iterationCount++
    if (math.abs(d2 - c2) > accuracy) {
      a = c2
      b = d2
    }
  } while (math.abs(d2 - c2) > accuracy)
  x = (c2 + d2) / 2
  return {x, iterationCount}
}

function f(x) {
  return math.sin(x ** 2)
}

function derivativeF(x) {
  let firstDerivate =  math.derivative('sin(x^2)', 'x')
  return firstDerivate.evaluate({x: x})
}

function secondDerivativeF(x) {
  let firstDerivate =  math.derivative('sin(x^2)', 'x')
  let secondDerivative = math.derivative(firstDerivate, 'x')
  return secondDerivative.evaluate({x: x})
}

function printResult({x, iterationCount}) {
  console.log('x: ', x)
  console.log('iteration count: ', iterationCount)
}


