// const math = require('mathjs')
// const Chart = require('chart.js')
const math = window.math
const Chart = window.Chart

xList = [34.47, 34.53, 29.49, 34.20, 30.33, 33.85, 36.93, 34.68, 30.15, 30.12, 31.66, 36.88, 30.93, 28.72, 32.17, 35.44, 34.49, 34.19, 29.91, 36.42, 28.24, 33.42, 32.81]

pList = xList.map((currentValue, index, array) => array.filter(elemet => elemet === currentValue).length / array.length)

xMean = xList.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / xList.length
console.log('arithmetic mean: ', xMean)

xMeanSquare = xList.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0) / xList.length
console.log('root mean square: ', xMeanSquare)

variance = xList.reduce((accumulator, currentValue) => accumulator + (currentValue - xMeanSquare) ** 2, 0) / xList.length
console.log('Variance ', variance)

skv = variance ** (1 / 2)
console.log('SKV ', variance)

alphabet = new Array()
xList.forEach(element => {
    if (!alphabet.includes(element)) alphabet.push(element)
})
entropy = -alphabet.reduce((accumulator, currentValue) => {
    probability = xList.filter(elemet => elemet === currentValue).length / xList.length
    return accumulator + probability * math.log(probability)
}, 0)
console.log('entropy: ', entropy)

// creating chart on html page
ctx = document.getElementById('chart').getContext('2d')

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: xList.map((element, index) => `x${index}`),
    datasets: [
      {
        label: 'value of a discrete random variable',
        data: xList,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'probability of a discrete random variable',
        data: pList.map(element => element * 100),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})


