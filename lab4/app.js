const math = require('mathjs')

function taylorSeriesSin(x, accuracy) {
  result = 0
  i = 1
  sinXSample = math.sin(x)
  do {
    result += (((- 1) ** (i - 1)) * (x ** (2 * i - 1))) / math.factorial( 2 * i - 1)
    difference = math.abs(sinXSample - result)
    i += 1
  } while (difference >= accuracy)
  return result
}

x = 0.54
sinExpression = (2 - x) ** 2
accuracy1 = 0.0005
accuracy2 = 0.001

sinX = math.sin(sinExpression)
result1 = taylorSeriesSin(sinExpression, accuracy1)
result2 = taylorSeriesSin(sinExpression, accuracy2)

console.log("sinX: ", sinX)
console.log(`result with accuracy ${accuracy1}: `, result1)
console.log(`result with accuracy ${accuracy2}: `, result2)
console.log('sinx - result1 = ', sinX - result1)
console.log('sinx - result2 = ', sinX - result2)
