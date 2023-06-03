'use strict';

let answer1 = confirm('Are you ready to rumble');
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE');
} else {
  console.log('oh ok then...');
}

let first = true;
let second = false;
let third = true;

if (first && third) { // if both conditions are met the && === true
  console.log('first and third are both true');
} else if (first || second) {
  if (!second) {
    console.log('second was false');
  }
  console.log('first or scond was true', 'first is:', first, 'Second type:', second);
} else if (third) {
  console.log('first and second were false but third was true');
} else {
  console.log('were any of the variables true');
}

let color = prompt('what is your favorite color');

switch (color.toLowerCase()) {
  case 'red': //the value of color was equal to red
    // console.log('your favorite color was red');
    alert('your favorite color was red');
    color = prompt('you are sure your favorite color is red?');
    switch (color.toLowerCase()) {
      case 'yes':
        console.log('okay then?...');
        break;
      case 'no':
        console.log('so youre not?');
        break;
      default:
        console.log('well what is it then????');
    }
    break;
  case 'blue':
    // console.log('your favorite color was blue');
    alert('your favorite color was blue');
    break;
  case 'green':
    console.log('your favorite color was green');
    break;
  default:
    console.log(`i guess your favorite color was ${color} I don't really like that color ¯\\_(ツ)_/¯`);
}
