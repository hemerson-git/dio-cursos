function addToList<T>(array: any[], value: T) {
  const newArray = array.map(() => value);
  return newArray;
}

const cList = addToList([1, 2, 3], 1);

console.log(cList);
