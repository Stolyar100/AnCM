const math = require('mathjs')

let a = math.pi / 3
let b = 3 * math.pi
let n = 14
let accuracy = 0.0005


let area = getArea(a, b, n)
console.log("area", area)
let minimalInterval = getMinimalInerval(a, b, accuracy)
console.log("minimalInterval", minimalInterval)


function getMinimalInerval(a, b, accuracy) {
  let interval = 2
  let currentAccuracy = 0 
  do {
    I = getArea(a, b, interval)
    I_2 = getArea(a, b, interval * 2)
    currentAccuracy = math.abs(I_2 - I) / 15
    interval++
  } while (currentAccuracy > accuracy)
  return interval
} 

function getArea (a, b, n) {
  let I = 0
  let V = 0
  let h = (b - a) / n

  for (x = a + h; x <= b - h; x += 2 * h) {
    I += f(x)
  }

  for (x = a + 2 * h; x <= b - h; x += 2 * h) {
    V += f(x)
  }

  return h * (f(a) + f(b) + 4 * I + 2 * V) / 3
}

function f(x) {
  return x * math.pi * math.cos(8 * x) + x ** 3
}
