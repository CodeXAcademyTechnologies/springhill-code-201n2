'use strict';
const catform = document.getElementById('catform');
const catlist = document.getElementById('catlist');
const state = {
  allCats: [],
};
function Cat(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement('li');
    listItem.textContent = this.name;
    catlist.appendChild(listItem);
  };
}

function handleCatSubmit(e) {
  e.preventDefault();
  const newCat = new Cat(e.target.kitten.value);
  console.log(newCat);
  state.allCats.push(newCat);
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(state.allCats);
  console.log('this is what is in local storage: ', localStorage.cats);
}
