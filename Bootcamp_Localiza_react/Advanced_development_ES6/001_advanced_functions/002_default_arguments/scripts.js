// IF i forget to pass the second argument, 
//then the function will return a NaN

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5));


// With default parameters values I can specify what I want
// If the User does not pass the second argument

function multiplyWithDefaultParams(a = 0, b = 1) {
  return a * b;
}

console.log(multiplyWithDefaultParams(5));

// We car pass the first argument as the default parameter
// for the second one

function sum(a = 0, b = a) {
  return a + b;
}

console.log(sum(5));
