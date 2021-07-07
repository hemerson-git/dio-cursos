const users = ['Hemerson', 'Graziele', 'Izabela'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const people = [{
    name: 'Hemerson',
    age: 23,
    gender: gender.MAN
  },
  {
    name: 'Graziele',
    age: 21,
    gender: gender.WOMAN
  }, {
    name: 'Izabela',
    age: 24,
    gender: gender.WOMAN
  }
]

// Returning the array length
console.log(people.length);

// Verify if is an array
console.log(Array.isArray(people));

// iterate array items
people.forEach(person => {
  console.log(person.name)
});

// Filter Array
const men = people.filter(person => person.gender === gender.MAN);
console.table(`Men List ${men}`)
