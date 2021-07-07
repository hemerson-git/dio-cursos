const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

// Symbols are unique
console.log(symbol1 === symbol2)

// Avoid conflict with property names
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Hemerson',
  [nameSymbol2]: 'Outro Nome',
  lastName: 'Oliveira'
}

console.log(user);

// Symbols create not enum properties
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`valor da chave ${key}: ${user[key]}`)
  }
}

// Show Object symbols
console.log(Object.getOwnPropertySymbols(user));

// Accessing all object properties
console.log(Reflect.ownKeys(user));
