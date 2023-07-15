'use strict';

const cta = document.querySelector('div.cta');
const results = document.getElementById('results');
function handleClick() {
  let newSection = document.createElement('section');
  newSection.setAttribute('class', 'deals');
  results.appendChild(newSection);


  //headline of section
  let headline = document.createElement('h3');
  headline.textContent = 'Today\'s Deal';
  newSection.appendChild(headline);


  // image of section
  let image = document.createElement('img');
  image.src = 'img/peppermint-bark.jpg';
  image.alt = 'today\'s candy deal';
  newSection.appendChild(image);

  // photo cred

  let pTagCredits = document.createElement('p');
  pTagCredits.textContent = 'Photo by jim.choate59';
  newSection.appendChild(pTagCredits);

  // button
  let divBtn = document.createElement('button');
  divBtn.setAttribute('class', 'claim-deal');
  divBtn.textContent = 'Peppermint Bark is 30% off!';
  newSection.appendChild(divBtn);
}
cta.addEventListener('click', handleClick);
cta.addEventListener('keypress', handleClick);
