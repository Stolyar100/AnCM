const math = require('mathjs')

let xValues = [2, 6, 10, 14, 18]
let fxValues = [0, 1, 24, 81, 192]
let X = 1.25

let laGranjMethodResult = laGranjMethod(xValues, fxValues, X)
let aitkenMethodResult = aitkenMethod(xValues, fxValues, X)
let splineMethodResult = splineMethod(xValues, fxValues, X)

console.log(laGranjMethodResult, ' - Інтерполяція методом Лагранжа')
console.log(aitkenMethodResult, ' - Інтерполяція методом Ейткена')
console.log(splineMethodResult, ' - Інтерполяція лінійними сплайнами')

console.log('Похибка інтерполяції методом Лангранджа = ', InterpolationError(xValues, fxValues, X, laGranjMethodResult))
console.log('Похибка інтерполяції методом Ейткена = ', InterpolationError(xValues, fxValues, X, aitkenMethodResult))
console.log('Похибка інтерполяції лінійними сплайнами = ', InterpolationError(xValues, fxValues, X, splineMethodResult))

function laGranjMethod(xVals, fxVals, x) {
  let S = 0

  for (let i = 0; i < xVals.length; i++) {
    let d1 = 1
    let d2 = 1

    for (let j = 0; j < fxVals.length; j++) {
      if (i != j) {
        d1 *= x - xVals[j]
        d2 *= xVals[i] - xVals[j]
      }
    }

    S += (d1 / d2) * fxVals[i]
  }

  return S
}

function aitkenMethod(xVals, fxVals, x) {
  let P = [...fxVals]

  for (let j = 0; j < xVals.length - 1; j++) {
    for (let i = j + 1; i < xVals.length; i++) {
      P[i] = ((x - xVals[j]) * P[i] - (x - xVals[i]) * P[j]) / (xVals[i] - xVals[j])
    }
  }
  return P[P.length - 1]
}

function splineMethod(xVals, fxVals, x) {
  let a = fxVals[0] / xVals[0]
  let b = 0
  let Y = a * x + b
  for (let i = 1; i < xVals.length; i++) {
    if (x < xVals[i]) {
      a = (fxVals[i] - fxVals[i - 1]) / (xVals[i] - xVals[i-1])
      b = fxVals[i-1] - a * xVals[i - 1]
      Y = a * x + b
      break
    }
  }
  return Y
}

function InterpolationError(xVals, fxVals, x, interpolationResult) {
  let w = 1

  for (let i = 0; i < xVals.length; i++) {
    w *= (x - xVals[i])
  }

  let R = interpolationResult / w
  let xNew = [...xVals]
  for (let i = 1; i < xNew.length; i++) {
    let v = 1

    for (let j = 0; j < xNew.length; j++) {
      if (j != i) {
        v = v * (xNew[i] - xNew[j])
      }
    }

    R += fxVals[i-1] / v
  }
  return math.abs(w * R)
}



