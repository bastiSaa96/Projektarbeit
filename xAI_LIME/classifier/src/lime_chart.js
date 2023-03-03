import Chart from 'chart.js/auto'


// Erstellen des Objekt Arrays mit den Daten
  const data = [
    { feature: 'Trump', negative: -2.45 },
    { feature: 'is', positive: 0.21 },
    { feature: 'asshole', negative: -6.63 },
    { feature: 'president', positive: 1.00 },
    { feature: 'sucks', negative: -5.85 },
    { feature: 'great', positive: 4.05 },
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
