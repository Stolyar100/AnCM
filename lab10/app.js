// Задання даних (Х з мого варіанту а Y з наступного за мною)
let X = [-5, 2, 0, -6, -4, 2, 5, 4, 3, 5, 5, 2, 0, 1, -2, -4, -3, 4, 3, 12, 9, 2, 2, -1, 1, -3, 1, 1, -4, -5, -4, -4]
let Y = [-6, 4, 1, 0, 1, 2, 4, 0, -3, 5, 6, 5, 8, 3, 4, 10, -1, 7, 3, 9, 6, 7, 10, 7, 2, 3, 5, 6, 7, 9, 5, 14]

// оголошення змінних що знадобляться в майбутньому
let Gxx = []
let Gxy = []
let temp
let temp_sum

// Обчислення значень Gхх
for (let j=0; j<=X.length; j++) {
    // 1 / n
    temp = 1 / X.length

    // сума всіх X[i] - X[i+j]
    temp_sum = 0;
    for (let i=0; i<=X.length; i++) {
        if (i + j > X.length - 1) {
            break; // виходимо за межі масиву - зупиняємо цикл.
        } 
        temp_sum += Math.abs(X[i] - X[i+j])
    }
    // множення 1 / n на отриману суму
    temp *= temp_sum; 

    // додавання результату в масив
    Gxx.push(temp);
};

// Обчислення значень Gхy
for (let j=0; j<=X.length; j++) {
    temp = 1 / X.length
    temp_sum = 0;
    for (let i=0; i<=X.length; i++) {
        if (i + j > X.length - 1) {
            break; // виходимо за межі масиву - зупиняємо цикл.
        } 
        temp_sum += Math.abs(X[i] - Y[i+j])
    }
    temp *= temp_sum; 
    Gxy.push(temp);
};

// Виведення масивів результатів в консоль
console.log("Gxx: ", Gxx);
console.log("Gxy: ", Gxy);


// Вивід графіків
am4core.ready(function() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chart", am4charts.XYChart);
    let title = chart.titles.create();
    title.text = 'Gxx';
    for (i=0; i<Gxx.length; i++) {
        chart.data.push({'x': i, 'Gxx': Gxx[i]});
    };
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.title.text = "x";
    xAxis.renderer.minGridDistance = 50;
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.title.text = "Gxx";
    yAxis.renderer.minGridDistance = 20;
    yAxis.min = 0;
    yAxis.max = 6;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "Gxx";
    series.dataFields.valueX = "x";
    series.tooltipText = "test";
    series.name = 'Gxx';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;

    chart.cursor = new am4charts.XYCursor();

    document.getElementById('chart').style.height = '500px';
});

am4core.ready(function() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chart2", am4charts.XYChart);
    let title = chart.titles.create();
    title.text = 'Gxy';
    for (i=0; i<Gxy.length; i++) {
        chart.data.push({'x': i, 'Gxy': Gxy[i]});
    };
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.title.text = "x";
    xAxis.renderer.minGridDistance = 50;
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.title.text = "Gxy";
    yAxis.renderer.minGridDistance = 20;
    yAxis.min = 0;
    yAxis.max = 6;


    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "Gxy";
    series.dataFields.valueX = "x";
    series.tooltipText = "test";
    series.name = 'Gxy';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;

    chart.cursor = new am4charts.XYCursor();

    document.getElementById('chart2').style.height = '500px';
});

am4core.ready(function() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chart0", am4charts.XYChart);
    let title = chart.titles.create();
    title.text = 'X';
    for (i=0; i<X.length; i++) {
        chart.data.push({'x': i, 'X': X[i]});
    };
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.title.text = "x";
    xAxis.renderer.minGridDistance = 50;
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.title.text = "X";
    yAxis.renderer.minGridDistance = 20;
    yAxis.min = -8;
    yAxis.max = 14;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "X";
    series.dataFields.valueX = "x";
    series.tooltipText = "test";
    series.name = 'X';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;

    chart.cursor = new am4charts.XYCursor();

    document.getElementById('chart0').style.height = '600px';
});