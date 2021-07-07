function fn() {
  return 'Fn Code Here';
}

const arrowFn = () => 'Code Here';

const arrowFn2 = () => {
  return 'Code Here';
}

// Functions are objects too

fn.prop = 'We can create properties to our functions'

console.log(fn());
console.log(fn.prop);

// Passing Parameters
function logValue(value) {
  console.log(value);
};

const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);
