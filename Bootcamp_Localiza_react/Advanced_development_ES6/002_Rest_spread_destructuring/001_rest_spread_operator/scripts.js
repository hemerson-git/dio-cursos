// Creating functions with unlimited numbers of parameters
// Before ES6

function sum(a, b) {
  var total = 0;


  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(2, 3, 5, 6, 4))

// Same but with ES6
function sumES6(...numbers) {
  const result = numbers.reduce((total, number) => total += number);

  return result;
}

console.log(sumES6(2, 3, 5, 6, 4));


// spread Operator

const person = {
  name: 'Hemerson',
  age: 23
}

const {
  age
} = person;

console.log(`I have: ${age}yo`);

const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 6, 7, 8];

console.log(arr2);
