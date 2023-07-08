'use strict';

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
console.log(image1);
let image2 = document.querySelector('section img:nth-child(2)');


let clicks = 0;
let maxClicksAllowed = 9;
let uniqueImageCount = 4;
const state = {
  allGoatsArray: [],
  indexArray: []
};
/*
[
  cruisin{
    name: cruisin,
    src: images/cruisin-goat.jpg;
    views: 0,
    click: 0
  }
  float{
    name: Float your goat,
    src: images/float-your-goat.jpg,
    views: 0,
    click: 0
  }
  hand{
    name: goat out of hand,
    src: images/goat-out-of-hand.jps,
    views: 0,
    click: 0
  }

]
let cruisin = new Goat('Cruising Goat', images/cruisin.jpg)
let float = new Goat('Float Your Goat', images/float-your-goat.jpg);
let hand = new Goat('Goat Out of Hand', images/goat-out-of-hand.jpg)
state.allGoatsArray.push(cruisin, float, hand)

*/


function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allGoatsArray.length);
}

function renderGoats() {
  // that each goat that is shown will not be the same as the previously shown goats. 
  while (state.indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!state.indexArray.includes(randomNumber)) {
      state.indexArray.push(randomNumber);
    }
  }
  console.log(state.indexArray);
  //state.indexArray = [0, 4, 5, 1]
  // [5, 1, 6, 2]
  // invoke the shift method to remove the first element in the index array and set goat1 value to the first element
  let goat1 = state.indexArray.shift();
  console.log('first shift', state.indexArray, 'goat1 value: ', goat1);
  // invoke the shift method again to remove the NEW first element in the index array and set goat2 value to the NEW first element in the array after the original first element is shifted out.
  let goat2 = state.indexArray.shift();
  console.log('second shift', state.indexArray, 'goat2 value: ', goat2);
  // first exe value of goat2 is equal to 1
  // goat1 = 3
  // goat2 = 7
  image1.src = state.allGoatsArray[goat1].src;
  image2.src = state.allGoatsArray[goat2].src;
  image1.alt = state.allGoatsArray[goat1].name;
  image2.alt = state.allGoatsArray[goat2].name;
  state.allGoatsArray[goat1].views++;
  state.allGoatsArray[goat2].views++;
}
function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click on an image');
  }
  clicks++;

  console.log(clicks);
  let clickGoat = event.target.alt;
  for (let i = 0; i < state.allGoatsArray.length; i++) {
    if (clickGoat === state.allGoatsArray[i].name) {
      state.allGoatsArray[i].click++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handleGoatClick);
    // add event Listener to the results button
    renderChart();
    goatContainer.className = 'no-voting';
  } else {
    renderGoats();
  }
}
function renderChart() {
  let goatNames = [];
  let goatLikes = [];
  let goatViews = [];

  for (let i = 0; i < state.allGoatsArray.length; i++) {
    goatNames.push(state.allGoatsArray[i].name);
    goatLikes.push(state.allGoatsArray[i].click);
    goatViews.push(state.allGoatsArray[i].views);
  }

  const chartData = {
    labels: goatNames,
    datasets: [
      {
        label: 'Likes',
        data: goatLikes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      },
      {
        label: 'Views',
        data: goatViews,
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgb(255, 158, 64)'
        ],
        borderWidth: 1
      }
    ]
  };
  const config = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  let chartCanvas = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(chartCanvas, config);
}

let cruisin = new Goat('Cruising Goat', 'images/cruisin-goat.jpg');
let float = new Goat('Float Your Goat', 'images/float-your-goat.jpg');
let hand = new Goat('Goat Out of Hand', 'images/goat-out-of-hand.jpg');
let kissing = new Goat('Kissing Goat', 'images/kissing-goat.jpg');
let sassy = new Goat('Sassy Goat', 'images/sassy-goat.jpg');
let smiling = new Goat('Smiling Goat', 'images/smiling-goat.jpg');
let sweater = new Goat('Sweater Goat', 'images/sweater-goat.jpg');
state.allGoatsArray.push(cruisin, float, hand, kissing, sassy, smiling, sweater);

renderGoats();

goatContainer.addEventListener('click', handleGoatClick);
