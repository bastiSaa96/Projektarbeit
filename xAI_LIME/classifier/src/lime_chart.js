import Chart from 'chart.js/auto'


// Erstellen des Objekt Arrays mit den Daten
  const data = [
    { feature: 'fucking', negative: -0.45 },
    { feature: 'clown', positive: 0.21 },
    { feature: 'ugly', negative: -0.63 },
    { feature: 'paedo', negative: -0.05 },
    { feature: 'retarded', negative: -0.75 },
    { feature: 'faggots', negative: -0.05 },
    { feature: "time", positive: 0.1},
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
