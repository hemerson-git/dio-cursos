let user = {
  name: 'Hemerson'
};

// Changing Object property

user.name = 'Other Name';
user['name'] = 'Other Name 2';

console.log(user.name);

const prop = 'name';
user[prop] = 'Other Name 3';

console.log(user.name);

// Creating a new property
user.lastName = 'oliveira';

// Deleting a property
delete user.name;
console.log(user);
