# Lecture

## Arrays

- Why

if you were needing to check a big data base: store into a database: users: 

using array and checking if the array has a length to execute depending on if the array does or does not have any length.

```js
let myArr = [1,2,3,4,5,6]
if(myArr.length){

}
for(let i = 0; i <= myArr.length)
for(let i = 0; i <= 6)
```

- What

 - an array is a group of stored values that are indexed and can be accessed and read.

- How

```js

let myArr = [1, 2, 3, 4, 5]
myArr.push() // adds an item to the end of your array
myArr.pop() // removes an item from the end of an array. 

```

## Control Flow

- Why

control flow lets us control the flow of the execution of code in our program. 

- What

Control flow is the order in which individual statements instructions or function calls are executed or evaluated.

- How
Comparison operators.
logical operators.
Evaluating comparison.
type coercion, weak typing, truthy/falsy

```js
let x = 10
let y = '10'

if(x == y){

}
```

## JS Control Flow

- Why

Loops.

- What
```js
for(let i =0; i > 5; i++)
while(condition === true){
  //
}
do{
// all this code inside of these curly brackets will be executed at a minimum of one. but it can be executed more than once if the while condition is true. 
}while(condition === true)

```

- How

## Comparison Operators

Compare two values and get a result in the form of `true` or `false`  

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a == b | loosely equal |evaluates equality of values a and b   |
| a === b | strictly equal | equality and the type of values a and b |
| a != b | not equal | inequality of values a and b|
| a !== b |Strictly not equal to| inequality of value and type of a and b|
| a > b | greater | is a greater than b |
| a < b | less than | is a less than b|
| a >= b | greater than or equal to | is a greater than or equal to b |
| a <= b | less than or equal to | is a less than or equal to b |

## Logical Operators

Compare the results of multiple comparison operators and (usually) get a final `true` or `false` result

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a && b   | and | that a and b both true |
| a &#124;&#124; b   | or   | is a or b true |
| !a       | not  | inverts the boolean value of a |


## CSS Box Model

- Why 
This is a fundamental concept for the composition of HTML web pages.

- What 
CSS box model is essentially a box that wrap around every HTML element

CSS determines the size postion and properties of these boxed