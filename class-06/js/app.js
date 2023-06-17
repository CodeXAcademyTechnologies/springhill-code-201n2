// problem domain: the Seattle Kitten rescue has tons of kittens who need to go to new and good homes. One of the best ways to make sure that the kittens get adopted is to create a kitten profile for each kitten that we have online so that people who may be interested can see what cats we have and decide if they would or would not like to adopt them.

// must haves:
// EACH kitten profile will have:
// - name:
// - random age assigned
// - a list of what they like
// - an image of the kitten
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: Dynamically generate kitten objects using form data.

'use strict';

const frankie = {
  name: 'frankie',
  age: 0,
  interests: ['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithOtherCats: true,
  getAge: function () {
    console.log(this.name);
    this.age = randomAge(3, 12) + ' months';
    console.log(this.age);
  }
};
frankie.getAge();

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// we need to: 
// get (from the DOM) who the parent element is going to be. Where am i attaching this new element.

const parentElement = document.getElementById('kittenProfiles');

// create a new element or elements that represent frankie.
// article
const article = document.createElement('article');
parentElement.appendChild(article);

// <div>
//  <article>
//  </article>
// </div>
const h2 = document.createElement('h2');
h2.textContent = frankie.name;
article.appendChild(h2);

const p = document.createElement('p');
p.textContent = `Frankie is adorable and is ${frankie.age} old.`;
article.appendChild(p);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < frankie.interests.length; i++) {
  const li = document.createElement('li');
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}

const img = document.createElement('img');
img.setAttribute('src', 'img/' + frankie.name + '.jpeg');
img.setAttribute('alt', `cute picture of ${frankie.name} who is an orange and white cat!`);
article.appendChild(img);

// const check = document.createElement('form');
// article.appendChild(check);

// const input = document.createElement('input');
// input.setAttribute('type', 'checkbox');
// input.setAttribute('value', 'is good with kids');
// input.setAttribute('name', 'goodWithKids');
// check.appendChild(input);
// const label = document.createElement('label');
// label.setAttribute('for', 'goodWithKids');
// label.innerText = 'Good with kids';
// input.appendChild(label);
const seattle = {
  location: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgSale: 6.3
}
const Tokyo = {
  location: 'Tokyo'
  maxCust: 24,
  minCust: 3,
  avgSale: 1.2
}