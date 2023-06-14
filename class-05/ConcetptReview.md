# Concept Review

Assume you are in a pair programming session, and are the navigator. Your driver for this exercise will be a chatbot of your choice. For each of the lines of code below, provide the (nerdy) english instructions that you would describe to the chatbot so that it will return the code shown.

For example, if you wanted the chatbot to return this code:

```javascript
let number = parseInt('2');

```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument '2'

## Javascript Fundamentals

```javascript
let name = 'Hedy Lamarr';
```

Declaring a variable name and setting its value to a string of  'Hedy Lamarr' 

```javascript
let numArray = new Array(10).fill('');
```

declaring a variable named numArray and giving it a value of a new Array and passing in the number 10 for the parameter so that the new array variable has 10 indexes and then using the fill method with an argument of an empty string to fill each index with an empty string.

```javascript
let nums = [];

for( let i = 1; i <= 100; i++ ) {
  nums.push(i);
 
}
```

declaring a variable called nums and setting/assigning its value to empty array. Using a for loop inside the for loop parameters we are declaring a variable called i and settings its value to 1.
while I is less than or equal to 100 execute the code inside of the for loop. for each time that we iterate over the for loop and increment the i variable by 1. using the method push each time the for loop runs we will push the current value of i into the array.

```javascript
console.log(nums.length);
```

we are using the console.log method to console log the length of the variable nums.
when running the console log we will get an output of a number that is equal to the number of indexes inside of the nums array.

```javascript
console.log(nums[3]);
```

we are using the console log method on the variable nums at the index of 3
the output of this console.log will 4 because the value at the 3rd index will be 4 after looping through the for loop.

## CSS Selectors

The goal for these examples is to have the chatbot provide you with the correct CSS declarations.

For example, if you wanted the chatbot to return this code:

```css
div {
  /* CSS rules */
}
```

You would say:
> Create a CSS declaration that will target any div element.

If you are unsure of what these selectors would target, refer to the following reference.

Ref: https://teamtreehouse.com/library/css-selector-reference

```css
div.car {
  /* CSS Rules */
}
```
create a css declaration that will target any div that has a class that is equal to car

```css
.car {
  /* CSS Rules */
}
```
create a css declaration that will target any element that has class that is equal to car

```css
#main-content {
  /* CSS Rules */
}
```
create a css declaration that will target THE element that has an ID attribute that is equal to main-content

```css
div > span {
  /* CSS Rules */
}
```
create a css declaration that will target all span elements whose direct parent element is a div. or create a css declaration that will target the span element that is a child of any div elements

```css
div span {
  /* CSS Rules */
}
```
create a css declaration that will target the span element that is within a div.

```css
div + span {
  /* CSS Rules */
}
```

create a css declaration that will target any div and span elements that are siblings. 

example of siblings:

```HTML
<main>
  <div></div>
  <span></span>
</main>
```

```css
div ~ span {
  /* CSS Rules */
}
```

create a CSS declaration that will target the direct predecessor that is the sibling subsequent sibling  of the chosen element in this case it would be the first span that is the sibling of a div

```HTML
<main>
  <span></span>
  <div></div>
  <span></span>
  <span></span>
  <p></p>
  <span></span>
  <div></div>
  <span></span>
  <span></span>
</main>
```

```HTML
   <ul>
      <li class="bg-green">First line</li>
      <li class="line">Second line</li>
      <li>Third line</li>
      <li class="bg-green">Fourth line</li>
      <li class="bg-green">Fifth line</li>
    </ul>
```

```CSS
.line ~ .bg-green{
  /* fourth and fifth line */
}
```

```css
input[type=text] {
  /* CSS Rules */
}
```
create a css declaration that targets any inputs that have an attribute of type that is equal to text


```css
div:hover {
  /* CSS Rules */
}
```

create a css declaration that targets any div elements and changes the styling properties when the element is hovered over.