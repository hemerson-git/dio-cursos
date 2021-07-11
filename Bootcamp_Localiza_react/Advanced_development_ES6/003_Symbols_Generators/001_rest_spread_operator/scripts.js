const uid = Symbol('Only_to_debug');
const uid2 = Symbol('Only_to_debug');


// Every Symbol is unique
console.log(uid);
console.log(uid === uid2);

const obj = {
  uid
}

console.log(obj)

// Well Known Symbol
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) {
  let {
    value,
    done
  } = it.next();

  if (done) {
    break;
  }

  console.log(value);
}

// With ES6

for (let value of arr) {
  console.log(value);
}

// With Symbol.iterator we can do the same with an object

const obj3 = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        index++;

        return {
          value: this.values[index - 1],
          done: index > this.values.length
        };
      }
    };
  }
};

const it2 = obj3[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
