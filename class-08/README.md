# Class-08 Prototypal inheritance, Wireframing,  and CSS Flexbox

## Prototypal Inheritance.

### Why

Prototypal inheritance is dynamic. Objects and methods can be shared copied and extended

### What

prototypal inheritance is the ability to access object properties from another object

### How

you can use or create or extend properties in the prototype of other objects and use them where you see fit or need them see JS for example.

In Javascript there is mechanism where objects can inherit properties from other objects.

JavaScript objects can be described as a dynamic collection of properties. One of these properties is the `[[prototype]]` internal property which is a reference to another object. 

if/when JavaScript fails to find a property in the oobject itself it looks for the property in the objects `[[prototype]]` this is a process thats known as property chain.

### working with Prototype inheritance

`Object.create()`: this is a method that creates a new new object with a specified prototype and properties.

`new`: keyword when a function is called with `new` it create a new object where the prototype is set to the functions prototype.

`constructor.prototype`: this is a property that points back to the original constructor function. it allows you to add properties and functions for all instances to inherit.

```js
City.prototype.render = function() {

}
let obj ={
  name: 'george',
  age: 25,
  hair: 'blonde'
}
console.log(obj.name)
```

## Wireframing

### Why

So that we can prepare for our page and know what we want to do before we start to program. 

wireframming is a very important step. it give the client, developer, and the designer an opportunity to walk through the structure oof the website without getting sidetracked by design elements such as colors and images.

It also gives you a starting point in your development process. This can easily be an overlooked and underestimated step. The reason that wireframing is so important is because when you see a problem domain or something that you want to build out it is easy to just ry to jump into the problem without any kind of plan. Using a wireframe to start you off will prevent you jumping into your development without a plan and give you at least a rough idea of what you would want your website to look like, this helps with content layout styling and even potentially js needs as this is the planning stage of where you begin and what you want out of this website.

### What

setting up layout of what you want the page to look like. almost like a skeleton.

A wireframe is a 2-d / two-dimensional illustration oof a web pages interface that shows the main elements of a web page layout as boxes with brief descriptions.

A wireframe is NOT an extremely detailed picture/illustration of every single aspect and design element of your webpage. 


### How

see attached img

## Flexbox

it is a bunch of items of different sizes and flex box allows you to return the best layout for those different items.

Flexbox is short for flexible box layout. it is a layout model in CSS that allows for easy manipulations of layout, alignments and distribution of space among items in a container. Unlinke traditional CSS techniques Flexbox is specifically designed for 1-d layouts in a dynamic and responsive way solving problems like vertical alignment and equally distributing space. 

### Flexbox Container Properties

`display`: to use flex box you must first set a item or group of items to `display: flex;` or `display:inline-flex;`

`flex-direction`: this sets the main axis, determining how the flex items are placed in the flex container it can have values such as `row`(default), `row-reverse`, `column`, or `column-reverse`.

`flex-wrap`: determines if flx items should wrap to a different row or column based on their size. it can have values such as: `no-wrap`(default), `wrap`, or `wrap-reverse`.

`justify-content`: controls how items align along the main axis. `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

`align-items` and `align-content`: manages the alignment of items across/ along the cross axis: these have similar values to `justify-content`.

### Flexbox Item Properties

`order`: this allows you to manually order how flex items appear within the flex container

`flex-grow` and `flex-shrink`: this allows flex items to grow or shrink to fill available space in the flex container. they take unit-less values that serve as a proportion.

`flex-basis`: is a default property you set before using `flex-grow` or `flex-shrink`

`align-self`: this allows for overriding the `align-items` value for individual items.