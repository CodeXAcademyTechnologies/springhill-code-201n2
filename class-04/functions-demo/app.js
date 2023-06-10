console.log('hello world');
// what is a function and how do they work?

// function declaration
function sayHello() {
  console.log('hello how are you');
}

//function invocation
sayHello();

//when you declare a function you have parameters that give names to the function inputs.

function sayGoodbye(name) {
  console.log(`goodbye ${name}`);
}

sayGoodbye('neo');

// if we want to pass a function information back to the program

function getFullName(firstName, lastName) {
  return firstName + ' middleName  ' + lastName;
}




let getUsersFullName = getFullName('ada', 'lovelace');
console.log('ada:', getUsersFullName);


function yesOrNoPrompt(promptInfo) {
  let userInput = prompt(promptInfo); //prompt('welp yess or nah')
  if (userInput === 'yess') {
    console.log('coolio');
  } else if (userInput === 'nah') {
    console.log('very well then');
  } else if (userInput === 'maybe') {
    console.log('can you just make up your mind already');
  } else {
    console.log('ERROR: invalid usage');
  }
}

yesOrNoPrompt('welp yess or nah');




