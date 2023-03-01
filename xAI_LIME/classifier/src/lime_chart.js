import Chart from 'chart.js/auto'



  const data = [
    { feature: 'Trump', negative: -2.45 },
    { feature: 'is', weight: 0.21 },
    { feature: 'asshole', negative: -6.63 },
    { feature: 'president', weight: 1.00 },
    { feature: 'sucks', negative: -5.85 },
    { feature: 'balls', weight: 4.05 },
  ]

  new Chart(
    document.getElementById('lime_chart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.feature),
        datasets: [
          {
            label: 'negative',
            data: data.map(row => row.negative),
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'positive',
            data: data.map(row => row.weight),
            backgroundColor: 'rgba(38, 194, 1)',
            borderColor: 'rgba(38, 194, 1)',
            borderWidth: 1
          }
        ]
      },
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
