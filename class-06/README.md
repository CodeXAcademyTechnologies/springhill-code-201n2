# Object Literals/ DOM Manipulation

## Discussion

1. How would you describe an object to a non-technical friend you grew up with

- an object is a collection of information that has equations or functions related to it.

- an object is a collection of related data.

2. What are some advantages to creating object literals?

- An object Literal in JS allows us to create plain JS objects with data that consists of key value pairs where all data in the object are encapsulated in curly braces `{}`.

3. How do objects differ from arrays

- arrays use number to access elements and objects use names to access elements. so where arrays have indexes for the data stored within them objects have multiple different properties that consist of key value pairs i.e. `name: Joey`.

4. Give an example for when you would need to use bracket notation to access an objects property instead of dot notation.

- if an object property name is held in a variable then you can not use dot notation and bracket notation is required. 

```js
const myObj = {
  0: 'a',
  1: 'b',
  2: 'c'
}
let dotNot = myObj.0
let brackNot = myObj['1']
```

5. Evaluate the code below. What does the term `this` refer to and what is the advantage to using `this`?

```js
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (name){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
let thisExe = dog.color
dog.humanAge('spot')
```

## Object 

```js
const myArr = ['a', 'b', 'c']
const myObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  name: 'Joey',
  pet: 'dog'
}
console.log(myArr);
console.log(myObj)
console.log(myObj.name)
console.log(myObj['pet']);
const person = {
  name: 'Adam Wallraff',
  age: 30,
  race: 'asian',
  weight: '175lbs',
  steps: 0,
  isWalking: false,
  walk: function(){
  this.isWalking = true
  }
};
person.walk();
console.log(person.isWalking)
while(person.isWalking){
  for(let i = 0; i < 5; i++){
    console.log(`${person.name} is now walking down the street.`);
    person.steps++
  }
    person.isWalking = false
}
console.log(person.isWalking)
console.log(person.steps)

const sam = {
  firstName: 'Sam',
  lastName: 'Hamm',
  rating: 0,
  isABoss: true,
  underlings: ['Nadia', 'Spencer', 'Dan'],

  getRating: function(){
          return `${this.firstName} has an average rating of ${this.rating}`
  },
  setRating: function(num1, num2, num3){
   let average = (num1 + num2 + num3) / this.underlings.length
     return this.rating = average
  } 
}
// All of sams underlings were given a task where they would rate same a score of 1 - 10 the average score would then be sams overall rating as a boss.  
sam.setRating(10, 5, 8);
let foundRating = sam.getRating();
// console.log(foundRating)
sam.firstName = 'joey';
sam.setRating(5, 5, 5);
let joeyChange = sam.getRating();
// console.log(joeyChange)
sam.employer = {
  name: 'CodeX Academy',
  location: 'TN'
}

sam.logName = function(){
  console.log(this.firstName + ' ' + this.lastName)
}
console.log(sam)
console.log(sam.employer.name)
console.log(sam.underlings[0])
sam.boss = function(){
  console.log(this.firstName + ' is the boss of ' + this.underlings)
}
sam.boss();
sam.underlings.push('Max');
sam.boss()
```

what are some built in objects in JS.

String, Array, Math, Date, Document

## DOM Manipulation

## Why

- DOM Manipulation is use to change the style, structure and content in an HTML document through JS

## What 

- Document Object Model - represents the HTMl and CSS coming together to create a document that we use in our browsers

## How

```HTML

<p id='paragraph'>
<div id='parentElement'>

</div>
```

```JS
let pTag = document.getElementById('paragraph')
pTag.innerText = 'Hello there how are you doing today?'
document.innerHTML
let parent = document.getElementById('parentElement')
const child = document.createElement('p');
child.textContent = 'hello there how are you today?'
parent.appendChild(child);
```

```HTML
<div>
<p>hello there how are you today?</p>
</div>

```
