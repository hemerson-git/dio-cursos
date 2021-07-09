// Literal Object 
const lastName = 'Oliveira'

function sayHello() {
  console.log('Hello');
}

const person = {
  name: 'Hemerson',
  lastName: lastName,
  age: 23,
  sayHello: sayHello
}

// With ES6, If the object property has the same name that the
// Variable or method, we can just omit it.

const person2 = {
  name: 'Graziele',
  lastName,
  sayHello,
  age: 21
}

console.log(person, person2)
person.sayHello();
person2.sayHello();


// Methods inside the instance 

const dog = {
  walk: function () {
    console.log('Walking');
  }
}

dog.walk();

// With ES6 we can also omit the name "function" from ours methods

const dog2 = {
  walk() {
    console.log('Walking 2')
  }
}

dog2.walk();
