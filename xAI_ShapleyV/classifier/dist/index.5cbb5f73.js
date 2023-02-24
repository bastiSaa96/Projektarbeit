// Hier sind die hypothetischen Shapley-Werte für den Satz "President Trump is an asshole and sucks balls."
var shapleyValues = [
    {
        name: "Trump",
        value: 0.3
    },
    {
        name: "asshole",
        value: 0.6
    },
    {
        name: "sucks",
        value: 0.2
    },
    {
        name: "balls",
        value: 0.1
    }
];
// Erstellt das D3 Force-Layout
var force = d3.forceSimulation().nodes(shapleyValues).force("charge", d3.forceManyBody().strength(-100)).force("link", d3.forceLink().links([]).distance(50)).force("center", d3.forceCenter().x(200).y(200)).on("tick", ticked);
// Erstellt das SVG-Element
var svg = d3.select("#force-plot").append("svg").attr("width", 400).attr("height", 400);
// Erstellt die Links zwischen den Nodes
var links = [];
for(var i = 0; i < shapleyValues.length - 1; i++)for(var j = i + 1; j < shapleyValues.length; j++)links.push({
    source: shapleyValues[i],
    target: shapleyValues[j]
});
force.force("link").links(links);
// Erstellt die Nodes und fügt sie zum SVG-Element hinzu
var nodes = svg.selectAll(".node").data(shapleyValues).enter().append("g").attr("class", "node");
nodes.append("circle").attr("r", 20).style("fill", "lightblue");
nodes.append("text").text(function(d) {
    return d.name;
});
// Definiert die Funktion "ticked" für das Force-Layout
function ticked() {
    svg.selectAll(".link").attr("x1", function(d) {
        return d.source.x;
    }).attr("y1", function(d) {
        return d.source.y;
    }).attr("x2", function(d) {
        return d.target.x;
    }).attr("y2", function(d) {
        return d.target.y;
    });
    svg.selectAll(".node").attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

//# sourceMappingURL=index.5cbb5f73.js.map
