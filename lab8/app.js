// intervals from variants table
let a = 4
let b = 10
let e = 0.01

// amount of iteration that depends from accurace (0.01 accuracy = 100 iteration)
let n = 1 / e

// calculating for loop step 
let h = (b - a) / n

function f(x) {
  return - 0.3 * x ** 3 + 8 * x ** 2 - 58 * x + 142
}

let yMin = f(a)
let xMin = a
let y

for (x = a + h; x <= b; x += h) {
  // calculating y
  y = f(x);

  // if value is less then current minimum it will be new minimum
  if (y < yMin) {
    xMin = x;
    yMin = y;
  }
}

console.log(`Значення х: ${xMin},\nзначення функції у цій точці: ${yMin}`);
