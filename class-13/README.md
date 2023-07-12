# Application State with Local Storage API

## Overview

In this class you will are going to be introduced the concept of persisting application state with local storage.

## Class Outline

- Code review of previous class lab assignment
- Code demo
  - JSON
  - Local storage
- Lab preview and prep

## Learning Objectives

### Students will be able to

- access and set items or data to local storage and retrieve the data in the data type it needs to be.

#### Describe and Define

- JSON syntax, structure, rules
- Application state and why it is needed
- Data persistence using local storage

#### Execute

- Convert objects to and from JSON with `JSON.stringify()` and `JSON.parse()`.
- Save application state directly into local storage through `localStorage.setItem()`.
- Retrieve application state from local storage through `localStorage.getItem()`.

## Notes

1. What is JSON?

- JSON can only have data in a string.

- JavaScript Object Notation

 Java
 Script
 Object
 Notation

 we write JSON in the format of an Object
 we use curly brackets and we use key value pairs in JSON the difference between an object literal and JSON is that both the key and the value in JSON need to be in a string. `parseInt()`

 `JSON.stringify()` it takes the data that we pass into the method and stringify the key value pairs to make sure that the key and value are both strings. `JSON.parse()` parses the data that we have in our JSON so that we can use the data in its natural data type. i.e number string boolean

- local storage uses JSON.

1. What is data persistence?

using data persistently through out the code.

you have your data. For example you have a user that is logged into your website. Data persistence would be different data that is set for that user. Such as maybe their username their email their password isLoggedOn

data persistence is persisting specific data throughout your webpage to ensure that the data that was collected maintains its state even through a page reload or redirect.

1. What is local storage?

storage that is set on the users computer.

1. Where is local storage stored?

on the browser itself.
