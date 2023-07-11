const context = document.getElementById('chart').getContext('2d');

// const dataSet = [12, 6, 24, 5, 3, 9];
const dataSet = JSON.parse(localStorage.productStats);
console.log(typeof dataSet, dataSet);
const itemNames = ['clock', 'watch', 'bigfoot', 'apple', 'tv', 'Blingy red shoes'];
const chartColors = ['black', ' white', 'brown', 'green', 'blue', 'red'];

const myChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: itemNames,
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: chartColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

function saveStatsToLocalStorage(dataSet) {
  const productStats = [];
  for (let i = 0; i < dataSet.length; i++) {
    productStats.push(dataSet[i]);
  }
  console.log(typeof productStats, productStats);
  localStorage.productStats = JSON.stringify(productStats);

}
saveStatsToLocalStorage(dataSet);
