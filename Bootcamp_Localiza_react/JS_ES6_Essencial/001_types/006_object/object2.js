console.log('*******************************************')

const user2 = {
  name: 'Hemerson',
  lastName: 'Oliveira'
}

// Get the object keys
console.log(Object.keys(user2));

// Get object values
console.log(Object.values(user2));

// Get the array relative to the object
console.log(Object.entries(user2));

// Merging two objects
Object.assign(user2, {
  fullName: 'Hemerson Oliveira Silva'
});

console.log(user2);

// Avoid changes on the object properties
const newObject = {
  foo: 'bar'
};

Object.freeze(newObject);

newObject.foo = 'changes';
console.log(newObject.foo);

// allows only changes to existing properties
const person = {
  name: 'Hemerson'
};

Object.seal(person);

delete person.name;
person.age = 20;

console.log(person);
