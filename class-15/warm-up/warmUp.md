# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```js
const num = parseInt("2");
/
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## Javascript Fundamentals

```js
const name = "John";
```

Declare a constant variable called name and assign it a value of a string of John

```js
console.log( typeof name );
```

using the dotnotation access the log method of the console object and for the parameter log the type of name using the typeof keyword.

```js
const nums = [1,2,3,4,5];
```

Declare a constant variable called nums and assign it a value of an array with elements of 1 through 5.

```js
for( const i=1; i<=100; i++ ) {
  console.log(i * i);
}
```

using a for loop declare a constant variable of i and assign it a value of 1. while i is less than or equal to i using dotnotation access the log method of the console object. log the value of i times i. finally increment the value of i by one through the use of the shorthand ++/plus plus operator.

## Javascript Objects

```js
const john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
```

declare a constant variable called john and set its value to an object literal. assign it properties using key value pairs as follows: first: 'John', last: 'Cokos', lastName: 'Cookoo', age: 50

```js
console.log(john.first);
```

using dotnotation access the log method of the console object. for the parameter of the log method us dotnotation to access the `first` property of the john object.

```js
const keyword = "last";
```

declare a constant variable named keyword and assign it a value of a string last

```js
console.log(john[keyword]); 
```

using dotnotation access the log method of the console object. for the parameter of the log method access the property equal to the keyword variable through the use of bracketnotation in the john object. 

## Functions

```js
function sayHi(name) {
  console.log('Hi', name);
}
```

declare a function named sayHi with a parameter of name. using dotnotation access the log method of the console object and for the parameter of the log method input a string of `Hi` and the parameter of name/ the parameter of the function.

```js
sayHi('Lyndsey');
```

invoke the sayHi function and input the argument of 'Lyndsey' to receive a console log of `Hi Lyndsey`

## Constructors

```js
function Person(name) {
  this.fullName = name;
}
```

```js
Person.prototype.sayMyName = function() {
  console.log( this.fullName.toUpperCase() );
}
```

```js
const john = new Person('John Cokos');
```

```js
john.sayMyName();
```

## Javascript for Fun and Profit

```js
console.log( greet('John') );

function greet(name) { 
  return sayHelloTo(name, 'Hi');
}

function sayHelloTo(person,greeting) {
  return awkwardGreeting(greeting, person);
}

function awkwardGreeting(words,name) {
  return `${name}, uh ... ${words}?`
}
```

```js
"These are some words".split(' ')[3].toUpperCase().charAt(0)
```

```js
"Hello world".charAt(Math.sqrt(16));
```

```js
({ type: "a", href: "http://swapi.co", text: "Star Wars API" })["type href text".split(" ")[Math.max(2, 0)]].length
```
