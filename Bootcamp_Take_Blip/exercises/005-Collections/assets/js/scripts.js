// Difference between Objects and Map

// Single Type
// It's iterable
// Keys doesn't need to be an string

const map = new Map();

map.set("language", "JavaScript");
map.set("apple", "Iphone");
console.log("Map", map);
console.log(map.has("apple"));

// Difference between Set and Array

// Single Values
// You can see the number of items, by using the property "size" instead "length"
// There is no methods (Map, filter, reduce, etc...)

const set = new Set();

set.add("Hello");
set.add("World");
console.log("Set", set);
