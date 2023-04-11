import Chart from 'chart.js/auto'


// Erstellen des Objekt Arrays mit den Daten
  const data = [
    { feature: 'criminals', negative: -0.75 },
    { feature: 'people', positive: 0.51 },
    { feature: 'illegally', negative: -0.37 },
    { feature: 'broke', negative: -0.32 },
    { feature: 'house', positive: 0.27 },
    { feature: 'country', positive: 0.05 },
    
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
