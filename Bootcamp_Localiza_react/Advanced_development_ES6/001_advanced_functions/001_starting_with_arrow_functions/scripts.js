// Old anonymouw Functions
const sum = function(a, b) {
  return a + b
}

console.log(sum(5, 2));


// Arrow Function Notation
const sumArrowFn = (a, b) => a + b;
console.log(sumArrowFn(5, 2));


// IF you have only one argument you can hide the parentheses

// Anonymous Function
const printName = function(name) {
  console.log(name);
}

printName('Hemerson');

// Arrow Function
const printNameArrowFn = name => console.log(name);
printNameArrowFn('Hemerson with arrow');
