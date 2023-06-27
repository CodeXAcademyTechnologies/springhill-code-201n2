# HTML Forms and JS Events

## HTML forms

```HTML
<form id='newKittenForm'>
  <fieldset>
    <label for="name-input">New Kittens Name</label>
    <input name='name' id='name-input' type='text'/>
<!-- oreo -->
    <label for='age-input'>Kittens Age</label>
    <input name='age' id='age-input' type='number'/>
<!-- 9  -->
    <label></label>
    <input/>
    <label></label>
    <input/>
  <button type='submit'>Submit</button>
  </fieldset>
</form>

```

## JS Events

```JS
let formElem = document.getElementById('newKittenForm')
formElem.addEventListener('submit', function(event){
event.preventDefault();
event.stopPropagation();

const newKittenName = event.target.name;
// oreo
const newKittenAge = event.target.age
// newKittenAge = '9'
})

```