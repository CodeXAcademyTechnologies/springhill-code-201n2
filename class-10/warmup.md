# Concept Review

Assume you are in a pair programming session, and are the navigator. Your driver for this exercise will be a chatbot of your choice. For each of the lines of code below, provide the (nerdy) english instructions that you would describe to the chatbot so that it will return the code shown.

For example, if you wanted the chatbot to return this code:

```javascript
const number = parseInt("2");
```

You would say:

> Use JS to declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## JavaScript Objects

```javascript
const character = {
  name: 'Mario',
  age: 35,
  occupation: 'Plumber',
  powerUps: ['Super Mushroom', 'Fire Flower', 'Starman'],
  getBio: function() {
    return `${this.name} is a ${this.age}-year-old ${this.occupation} who has the following power-ups: ${this.powerUps.join(", ")}.`;
  }
};
```

> use JS to declare a variable called character and set its value to an object literal where that object literal has properties of key value pairs : name: 'Mario', age: 35, occupation: 'Plumber', powerUps: ['super Mushroom', 'Fire Flower', 'Starman'], and getBio method where the method will return the a string that says the name property is a age property-year-old occupation property who has the following power-ups use the powerUps property and use the array method of join to join the array indexes with quotations and a comma.

```javascript
console.log(character.name);
```

> use JS to access the console object and then using dotnotation access the log method. Pass the character objects with the property of name using dotnotation to return the value of the name property in the character object inside of the console object.

```javascript
const keyword = 'powerUps';
```

> use JS to declare a constant variable called keyword and set its value to a string of powerUps.

```javascript
console.log(character[keyword][1]);
```

use JS to access the console object and then using dotnotation access the log method. Pass in the character object and then using bracket-notation pass in the keyword variable at the index of 1 to return the value of the index of 1 of the powerUps array property in the character object inside of the console object

```javascript
const props = ['name', 'age', 'occupation', 'powerUps', 'getBio'];
```

use JS declare a constant variable called props and set the value to an array with the indexes as follows: 'name', 'age', 'occupation', 'powerUps', 'getBio'

```javascript
for( let i = 0; i < props.length; i++) {
  console.log( props[i],  character[props[i]]  );
}
```

## Functions

```javascript
function sayHi(name) {
  console.log('Hi', name);
}

// function declaration
```

use JS to declare a function using the keyword function and then name the function sayHi. have the function in a parameter called name. inside of the scope of the function you are going to access the console object then through the use of dotnotation access the log method inside of the console object. for the parameter of the log method pass in as a string 'Hi' and then the name parameter.

```javascript
const screamHello = function(name) {
  console.log( 'HELLO', name.toUpperCase() );
}
//  when you declare a variable and set assign its value to a function it is called a function expression.
```

use JS to declare a constant variable called screamHello assign its value to a function expression that takes in a parameter called name. inside the scope of the function expression access the console object then through the use of dotnotation access the log method inside of the console object. for the parameter of the log method pass in hello as a string in all uppercase capitalization and then the name parameter and then use dotnotation to access the toUpperCase method inside of the objects prototype to make all of the name parameter uppercase

```javascript
sayHi('Ada');
```

use JS to invoke the sayHi function and pass in a string with a value of Ada as the argument.

```javascript
screamHello('Victor');
```

use JS to invoke the screamHello function and pass in a string with a value of Victor as the argument.

## Constructors

```javascript
function Person(name) {
  this.fullName = name;
}
```

```javascript
Person.prototype.sayMyName = function() {
  console.log(this.fullName.toUpperCase());
}
```

```javascript
Person.whisper = function() {
  console.log('sssshhhh');
}
```

```javascript
Person.sayMyName();
```

```javascript
const ada = new Person('Ada Lovelace');
```

```javascript
ada.sayMyName();
```

```javascript
ada.whisper();
```

```javascript
Person.whisper();
```
