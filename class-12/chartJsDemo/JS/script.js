const drawingCanvas = document.getElementById('myChart').getContext('2d');
const names = ['Jon y', 'CJ', 'John J', 'Elias'];
const myChart = new Chart(drawingCanvas, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: '# of votes',
      data: [1, 2, 3, 4],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})