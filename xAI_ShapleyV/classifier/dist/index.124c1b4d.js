// Define the data
var players = [
    "Player A",
    "Player B",
    "Player C",
    "Player D"
];
var values = [
    0.2,
    0.3,
    0.4,
    0.1
];
// Calculate the Shapley values
var shapleyValues = calculateShapleyValues(values);
// Define the chart element
var chart = d3.select("#chart");
// Define the bar elements
var bars = chart.selectAll(".bar").data(shapleyValues).enter().append("div").attr("class", "bar").style("width", function(d) {
    return d * 200 + "px";
});
// Define the label elements
var labels = chart.selectAll(".label").data(players).enter().append("div").attr("class", "label").text(function(d) {
    return d;
});
// Define the tick function to update bar widths
function updateBars() {
    bars.style("width", function(d) {
        return d * 200 + "px";
    });
}
// Function to calculate the Shapley values
function calculateShapleyValues(values) {
    var n = values.length;
    var shapleyValues = new Array(n);
    for(var i = 0; i < n; i++){
        var numerator = 0;
        var denominator = factorial(n - 1);
        for(var j = 0; j < 1 << n - 1; j++){
            var coalition = [];
            for(var k = 0; k < n - 1; k++)if ((j & 1 << k) !== 0) coalition.push(k);
            coalition.push(i);
            coalition.sort();
            var m = coalition.length;
            var contribution = values[coalition[m - 1]] - (m > 1 ? values[coalition[m - 2]] : 0);
            numerator += contribution * binomial(n - 1, m - 1);
        }
        shapleyValues[i] = numerator / denominator;
    }
    return shapleyValues;
}
// Function to calculate the factorial of a number
function factorial(n) {
    var result = 1;
    for(var i = 2; i <= n; i++)result *= i;
    return result;
}

//# sourceMappingURL=index.124c1b4d.js.map
