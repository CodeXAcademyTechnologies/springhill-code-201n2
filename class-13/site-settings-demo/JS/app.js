'use strict';

let settings = {
  darkMode: false,
  open: null,
  comment: ""
};

let mode = document.getElementsByClassName('mode');
let details = document.getElementsByTagName('details');
let commentBox = document.getElementById('commentBox');
let openDetail = null;

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById('welcome');
  let button = document.getElementById('darkButton');
  let oppositeButton = document.getElementById('lightButton');
  body.classList.remove('light');
  body.classList.add('dark');
  welcome.classList.add('dark');
  button.setAttribute('checked', 'checked');
  // oppositeButton.setAttribute('checked', 'false');
  // local storage

  settings.darkMode = true;
  saveSettings();
}
// enterDarkMode()
function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById('welcome');
  let button = document.getElementById('lightButton');
  let oppositeButton = document.getElementById('darkButton');
  body.classList.remove('dark');
  body.classList.add('light');
  welcome.classList.add('light');
  button.setAttribute('checked', 'checked');
  // oppositeButton.setAttribute('checked', 'false');

  //local storage
  settings.darkMode = false;
  saveSettings();
}
function loadSettings() {
  let getSettings = localStorage.getItem('settings');
  if (getSettings) {
    console.log(getSettings);
    settings = JSON.parse(getSettings);
    console.log(settings);
  }
}
function saveSettings() {
  let stringify = JSON.stringify(settings);
  localStorage.setItem('settings', stringify);
  console.log(typeof stringify);
}

function pageLoad() {
  let savedSettings = localStorage.getItem('settings');
  if (!savedSettings) {
    return;
  }
  loadSettings();
  if (settings.darkMode) {
    console.log('test dark');
    enterDarkMode();
  } else {
    enterLightMode();
  }
  if (settings.open !== null) {
    details[settings.open].setAttribute('open', 'open');
  }
  commentBox.value = settings.comment;
}
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener('click', function () {
    // change styling of the background and text colors.
    if (this.value === 'dark') {
      enterDarkMode();
    }
    if (this.value === 'light') {
      enterLightMode();
    }
  });
}

// add event listener to all details.
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', function () {
    if (settings.open === i) { // gaurd clause so that details that get closed stay closed
      settings.open = null;
      saveSettings();
      return;
    }
    openDetail = i;
    settings.open = i;
    saveSettings();
    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute('open');
      }
    }
  });
}

commentBox.addEventListener('input', function () {
  settings.comment = commentBox.value;
  saveSettings();
});

pageLoad();
