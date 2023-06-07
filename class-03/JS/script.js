'use strict';
let userPoints = 0;

console.log('hello world');

alert('Hello there welcome to my guessing game.');

let user = prompt('what is your name');

while (!user) {
  user = prompt('What is your name? really I need it');
}

if (user !== 'Elias') {
  alert('you are not this sites creator welcome to this page');
}

alert(`hello ${user} I hope you enjoy your time on this website`);

let answer = prompt('is elias\'s favorite food steak? type yes or no');

let eliasFavFood = ['tater-tots', 'chocolate', 'chicken', 'popcorn'];

for (let i = 0; i < eliasFavFood.length; i++) {
  console.log(eliasFavFood[i]);
}

eliasFavFood.push('hamburger');
console.log(eliasFavFood);

let veggie = eliasFavFood.pop();
console.log(eliasFavFood);
let index = eliasFavFood.indexOf('chicken');
console.log(index);

if (answer === 'yes' || answer === 'y') {
  userPoints++;
} else {
  alert('wrong try again.');
}
alert(`you have ${userPoints} points`);