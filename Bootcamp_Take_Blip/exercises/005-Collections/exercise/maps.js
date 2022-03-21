function getAdmin(users) {
  const filteredUser = [];

  for ([key, value] of users) {
    if (value.toLowerCase() === "admin") {
      filteredUser.push(key);
    }
  }

  return filteredUser;
}

const users = new Map();

users.set("Hemerson", "Admin");
users.set("Eveline", "Admin");
users.set("Uílio", "User");
users.set("Lua", "User");

console.log(getAdmin(users));
