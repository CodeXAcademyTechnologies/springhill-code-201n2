'use strict';

function Kitten(name, interests, goodWithDogs, goodWithCats, goodWithKids, imageFilename) {
  this.name = name;
  this.interests = interests;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;
  this.goodWithKids = goodWithKids;
  this.imageUrl = 'images/' + imageFilename;
  this.age = this.generateAge();
}


//  methods get added to the constructors prototype.
Kitten.prototype.generateAge = function () {
  return getRandomInteger(3, 12) + ' months';
};

Kitten.prototype.meow = function () {
  console.log(`${this.name} is meowing`);
};


Kitten.prototype.render = function () {

  // get the container element
  const containerElem = document.getElementById('kittenProfiles');
  const articleElem = document.createElement('article');
  articleElem.setAttribute('class', 'kittenProfileContainer');
  containerElem.appendChild(articleElem);


  //add the article heading for the kitten profile
  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = this.name;

  // add the age/bio
  const paraElem = document.createElement('p');
  articleElem.appendChild(paraElem);
  paraElem.textContent = `${this.name} is adorable and is ${this.age} old`;

  // add interests in an unordered lists
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = this.interests[i];
  }

  //add a table of "good withs"
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // add our header row
  const headerRow = document.createElement('tr');
  tableElem.appendChild(headerRow);

  const kidsHeaderCell = document.createElement('th');
  headerRow.appendChild(kidsHeaderCell);
  kidsHeaderCell.textContent = 'Kids';

  const dogsHeaderCell = document.createElement('th');
  headerRow.appendChild(dogsHeaderCell);
  dogsHeaderCell.textContent = 'Dogs';

  const catsHeaderCell = document.createElement('th');
  headerRow.appendChild(catsHeaderCell);
  catsHeaderCell.textContent = 'Cats';

  // add our data row
  const dataRow = document.createElement('tr');
  tableElem.appendChild(dataRow);

  // add our data cells

  const kidsDataCell = document.createElement('td');
  dataRow.appendChild(kidsDataCell);
  kidsDataCell.textContent = this.goodWithKids;


  const dogsDataCell = document.createElement('td');
  dataRow.appendChild(dogsDataCell);
  dogsDataCell.textContent = this.goodWithDogs;

  const catsDataCell = document.createElement('td');
  dataRow.appendChild(catsDataCell);
  catsDataCell.textContent = this.goodWithCats;

  // render image for the cat
  const imgElem = document.createElement('img');
  articleElem.appendChild(imgElem);
  imgElem.setAttribute('src', this.imageUrl);
  imgElem.setAttribute('alt', `picture of ${this.name}`);
};



function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const frankie = new Kitten('Frankie', ['cuddling', 'chasing string', 'catnip'], true, true, true, 'frankie.jpeg');
const jumper = new Kitten('Jumper', ['sunbathing', 'yarn', 'milk', 'paper bags'], false, true, true, 'jumper.jpeg');
const serena = new Kitten('Serena', ['sitting in laps', 'climbing cutains', 'eating treats'], false, true, false, 'serena.jpeg');
// const frankie = {
//   name: 'frankie',
//   meow: function () {
//     console.log(`${this.name} is meowing`)
//   }
// }
console.log(frankie);
console.log(jumper);
frankie.meow();
frankie.render();
jumper.render();
serena.render();












// const kitties = {
//   kittenName: 'frank',
//   meow: function () {
//     console.log(`${this.kittenName} is meowing`);
//   }
// }
