# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```js
const num = parseInt("2");
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## Javascript Fundamentals

```js
const name = "John";
```

```js
console.log( typeof name );
```

```js
const nums = [1,2,3,4,5];
```

```js
for( const i=1; i<=100; i++ ) {
  console.log(i * i);
}
```

## Javascript Objects

```js
const john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
```

```js
console.log(john.first);
```

```js
const keyword = "last";
```

```js
console.log(john[keyword]); 
```

## Functions

```js
function sayHi(name) {
  console.log('Hi', name);
}
```

```js
sayHi('Lyndsey');
```

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
