// Define the data
var players = [
    "Trump",
    "sucks",
    "is",
    "he",
    "asshole",
    "great"
];
var values = [
    -0.234,
    -0.356,
    -0.243,
    0.134,
    -0.548,
    0.176
];
// Calculate the Shapley values
var shapleyValues = values.sort((a, b)=>a - b);
// Define the chart element
var chart = d3.select("#chart");
// Define the group elements
var groups = chart.selectAll(".group").data(shapleyValues).enter().append("div").attr("class", "group").style("display", "inline-flex").style("flex-direction", "column").style("justify-content", "center");
// Define the bar elements
var bars = groups.append("div").attr("class", "bar").style("width", function(d) {
    return Math.abs(d) * 500 + "px";
}).style("height", "35px").style("background-color", (d)=>d > 0 ? "rgba(70, 130, 180, 0.7" : "rgba(255, 0, 0, 0.7)").style("display", "flex").style("justify-content", "center").style("align-items", "center");
// Add a value element to each bar
bars.append("div").attr("class", "value").text(function(d) {
    return d.toFixed(3);
});
// Define the label elements
var labels = groups.append("div").attr("class", "label").text(function(d, i) {
    return players[i];
}).style("left", "-5%").style("padding", "0").style("margin-left", function(d) {
    return Math.abs(d) * 200 + "px";
}).style("margin-top", "1rem");
// Define the tick function to update bar widths and label positions
function updateBars() {
    bars.style("width", function(d) {
        return Math.abs(d) * 200 + "px";
    }).style("background-color", function(d) {
        return d > 0 ? "green" : "red";
    });
    labels.style("margin-left", function(d) {
        return Math.abs(d) * 200 + "px";
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
// Function to calculate the binomial coefficient
function binomial(n, k) {
    var result = 1;
    for(var i = 0; i < k; i++)result *= (n - i) / (i + 1);
    return result;
}
// Function to calculate the factorial of a number
function factorial(n) {
    var result = 1;
    for(var i = 2; i <= n; i++)result *= i;
    return result;
}

//# sourceMappingURL=index.c07517c4.js.map
