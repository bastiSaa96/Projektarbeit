// Define the data as an array of objects
const data = [
  { feature: "Trump", value: -0.234 },
  { feature: "sucks", value: -0.356 },
  { feature: "is", value: -0.243 },
  { feature: "he", value: 0.134 },
  { feature: "asshole", value: -0.548 },
  { feature: "great", value: 0.176 },
];

// Sort the data array by absolute value of values
const sortedData = data.sort((a, b) => a.value - b.value);

// Define the chart element
const chart = d3.select("#chart");

// Define the group elements
const groups = chart
  .selectAll(".group")
  .data(sortedData)
  .enter()
  .append("div")
  .attr("class", "group")
  .style("display", "inline-flex")
  .style("flex-direction", "column")
  .style("justify-content", "center");

// Define the bar elements
const bars = groups
  .append("div")
  .attr("class", "bar")
  .style("width", function (d) {
    return Math.abs(d.value) * 500 + "px";
  })
  .style("height", "35px")
  .style("background-color", function (d) {
    return d.value > 0 ? "rgba(70, 130, 180, 0.7" : "rgba(255, 0, 0, 0.7)";
  })
  .style("display", "flex")
  .style("justify-content", "center")
  .style("align-items", "center");

// Add a value element to each bar
bars
  .append("div")
  .attr("class", "value")
  .text(function (d) {
    return d.value.toFixed(3);
  });

// Define the label elements
const labels = groups
  .append("div")
  .attr("class", "label")
  .text(function (d) {
    return d.feature;
  })
  .style("left", "-5%")
  .style("padding", "0")
  .style("margin-left", function (d) {
    return Math.abs(d.value) * 200 + "px";
  })
  .style("margin-top", "1rem");

// Define the tick function to update bar widths and label positions
function updateBars() {
  bars
    .style("width", function (d) {
      return Math.abs(d.value) * 200 + "px";
    })
    .style("background-color", function (d) {
      return d.value > 0 ? "green" : "red";
    });
  labels.style("margin-left", function (d) {
    return Math.abs(d.value) * 200 + "px";
  });
}

