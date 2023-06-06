# discussion

1. What data types can you store inside of an Array?

2. Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?

```js
 const people = [
  ['pete', 32, 'librarian', null], 
  ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], 
  ['bill', null, 'artist', null]
  ];
 ```
it is a valid array. I had valid data types being stored in it. and to access the data you first access the index of the people array and then the index of your first index. this can be done by either console.logging :
```js
console.log(people[0][0])
// or by assign the indexed array value to a variable and then indexing that variable.
let dataArray = people[0];
console.log(dataArray[0])

```

3. List five shorthand operators for assignment in javascript and describe what they do.

## student answers

- x += f sets the value of x = x + f
- (x  && f) it determines if x and f are equal to a value that is not undefined or null.
- (x === 5 && f === 5) determines if both values on each side of the operator return a true value. if both sides are true the output of the logical operator will be a true value. if either one or both sides of the && operator are false/ falsey the operator will return a false value.
- x == y this is an operator that compares two operands to see if their values are loosely equal to each other. meaning that x = 10 y = '10'
- 
- 

## instructor answers

x += y this is setting the value or assigning the vale of x to be x = x + y

let x = 5 the assignment operator = assigns the value of a variable to be equal to some data type.

x -= y this is setting the value of x to be x = x - y

x *= y this is setting the value oof x to be x = x times y

4. Read the code below and evaluate the last expression and explain what the result would be and why.

```js
 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this
 (a + c) + b;
 // 10 = nothing and taking that result and adding to the string of dog 
// '10dog'
// 
```


5. Describe a real world example of when a conditional statement should be used in a JavaScript program.

- if the users password input is equal to the users password in the db

- when to run certain code blocks. an example of this could be if a user is logged in

- using a conditional to determine if a workers hours passed a certain threshold to be considered overtime if(hoursWorked > 40){

}

Give an example of when a Loop is useful in JavaScript.

- rendering elements based on a specific need.

- when a user is supposed to have a valid input.

```js
while(userInput !== userPassword){

}
let chancesleft = 3;
for(let x = 0; x < 3; x++){
  if(userInput !== 'red'){
    prompt('what is my favorite color?');
    chancesLeft--;
    alert(`you have ${chancesLeft} guesses left`);
  }else {
    break;
  }
}
while(userInput !== 'red'){
  prompt('what is my favorite color)
}
```
