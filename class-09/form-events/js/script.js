'use strict';

function Kitten(name, interests, goodWithDogs, goodWithCats, goodWithKids, imageFilename) {
  this.name = name;
  this.age = this.assignAge();
  this.interests = interests;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;
  this.goodWithKids = goodWithKids;
  this.imageUrl = 'images/' + imageFilename;
  // this.age = this.generateAge();
}


//  methods get added to the constructors prototype.
// there are built in Objects inside of JS Math, Array, Number, String

// add a method to JavaScripts built in Number class/object to calculate "cat years" in relation to human years
console.log(Number.prototype);

Number.prototype.calculateAgeInHumanYears = function () {
  //the first year of a cats life is equal to approximately 15 year human years.
  console.log(this);
  return Math.floor(this / 12 * 15);
};
Kitten.prototype.assignAge = function () {
  // the random month number must be persisted so we can use more than once
  let months = getRandomInteger(3, 12);
  console.log(months);
  this.age = months + ' months';
  this.ageInCatYears = months.calculateAgeInHumanYears();
  //                     8.calculateAgeInHumanYears or the number value of months.calculateAgeInHumanYears
  console.log(Number.calculateAgeInHumanYears);
};
// Kitten.prototype.generateAge = function () {
//   return getRandomInteger(3, 12) + ' months';
// };

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
frankie.assignAge();
jumper.render();
serena.render();

const kittenForm = document.getElementById('addKittenForm');

kittenForm.addEventListener('submit',
  function (event) {
    console.log(event);

    /*
    when accessing values of your HTML Form you will first start with the event itself which is an object. next you will use dotnotation to check for the property called target. after that you will use dotnotation again to grab the value that your <input> html element has when it has the attribute 'name' i.e <input name='thisIsTheValueYouAreGoingToGrab'> and then check for the value of that input after the user submits their form. Important to remember that until the form is submitted the value will be null.
    */
    event.preventDefault();
    const name = event.target.name.value;
    let interests = event.target.interests.value;
    interests = interests.split(',');
    const isGoodWithKids = event.target.isGoodWithKids.checked;
    const isGoodWithDogs = event.target.isGoodWithDogs.checked;
    const isGoodWithCats = event.target.isGoodWithCats.checked;
    const newKitten = new Kitten(name, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, 'catPlaceHolder.jpeg');
    newKitten.assignAge();
    newKitten.render();
    kittenForm.reset();
  });











// const kitties = {
//   kittenName: 'frank',
//   meow: function () {
//     console.log(`${this.kittenName} is meowing`);
//   }
// }
