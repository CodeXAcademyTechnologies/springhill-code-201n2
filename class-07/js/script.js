'use strict';

function Kitten(name, interests, goodWithDogs, goodWithCats, goodWithKids, imageFilename) {
  this.name = name;
  this.interests = interests;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;
  this.goodWithKids = goodWithKids;
  this.imageUrl = 'images/' + imageFilename;
}
Kitten.prototype.render = function () {
  const containerElem = document.getElementById('kittenProfiles');
  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);


  //add the article heading for the kitten profile
  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = this.name;
};





const frankie = new Kitten('Frankie', ['cuddling', 'chasing string', 'catnip'], true, true, true, 'frankie.jpeg');
frankie.render();












// const kitties = {
//   kittenName: 'frank',
//   meow: function () {
//     console.log(`${this.kittenName} is meowing`);
//   }
// }