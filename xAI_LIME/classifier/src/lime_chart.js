import Chart from 'chart.js/auto'


// Erstellen des Objekt Arrays mit den Daten
  const data = [
    {feature: "springt aus dem Fenster", negative: -0.45},
    {feature: "Volksaufstand", negative: -0.32},
    {feature: "Agenten", positive: 0.27},
    {feature: "Kreml", positive: 0.18},
    {feature: "russischen", positive: 0.12},
    {feature: "überleben", positive: 0.09}
    
  ]

// Erstellen des Diagramms
  new Chart(
    document.getElementById('lime_chart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.feature),
        // Die Datensätze aus dem Objekt Array in postive und negative Werte unterteilen
        datasets: [
          {
            label: 'negative',
            data: data.map(row => row.negative),
            backgroundColor: '#FF7514',
            borderColor: '#FF7514',
            borderWidth: 1
          },
          {
            label: 'positive',
            data: data.map(row => row.positive),
            backgroundColor: '#007fff',
            borderColor: '#007fff',
            borderWidth: 1
          }
        ]
      },
      //Optionen der Darstellung des Diagramms bestimmen, sodass ein horizontales Balkendiagramm entsteht
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }          
        },
      },
    }
  );
