// Daten als ein Objekt Array definieren
const data = [
  {feature: "russischen", value: 0.162},
  {feature: "Agenten", value: 0.394},
  {feature: "Volksaufstand", value: -0.472},
  {feature: "springt aus dem Fenster", value: -0.631},
  {feature: "Kreml", value: 0.253},
  {feature: "überleben", value: 0.135}
];

// Die Werte aus dem Array der Größe nach ordnen
const sortedData = data.sort((a, b) => a.value - b.value);

// Das Diagramm-Element mit der ID=Chart definieren
const chart = d3.select("#chart");

// Die Gruppen des Diagramms definieren
const groups = chart
  .selectAll(".group")
  .data(sortedData)
  .enter()
  .append("div")
  .attr("class", "group")
  .style("display", "inline-flex")
  .style("flex-direction", "column")
  .style("justify-content", "center");

// Definieren der dargestellten Balken
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

// die Werte den Balken im Diagramm hinzufügen
bars
  .append("div")
  .attr("class", "value")
  .text(function (d) {
    return d.value.toFixed(3);
  });

// Erstellen der labels (features) zu den Werten
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


