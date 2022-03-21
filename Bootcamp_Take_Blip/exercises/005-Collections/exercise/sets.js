const initialArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function getNonRepeating(arr) {
  const nonRepeating = new Set(arr);
  const newArr = [...nonRepeating];

  return newArr;
}

console.log(getNonRepeating(initialArr));
