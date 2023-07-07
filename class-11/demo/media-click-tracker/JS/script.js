'use strict';

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
console.log(image1);
let image2 = document.querySelector('section img:nth-child(2)');


let clicks = 0;
let maxClicksAllowed = 9;

const state = {
  allGoatsArray: []
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
  // call the getRandomNumber
  let goat1 = getRandomNumber();
  // first exe value is equal to 0
  let goat2 = getRandomNumber();
  // first exe value of goat2 is equal to 1
  // goat1 = 3
  // goat2 = 7
  while (goat1 === goat2) {
    goat2 = getRandomNumber();
  }
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
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    goatContainer.className = 'no-voting';
  } else {
    renderGoats();
  }
}
function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allGoatsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${state.allGoatsArray[i].name} had ${state.allGoatsArray[i].views} views and was clicked ${state.allGoatsArray[i].click} times.`;
    ul.appendChild(li);
  }
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
