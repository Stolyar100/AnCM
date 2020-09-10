const math = require('mathjs')

x = 1.11
f = x ** 5 - 3 * x - 1.47
console.log('Result:', f)

diff = math.derivative('x ^ 5 - 3 * x - 1.47', 'x').evaluate({x: x})

t = 15
dX = 0.5 * 10 ** (-t)
fResult = Math.abs(diff) * dX
mistake = fResult / f

console.log('Mistake:', mistake)