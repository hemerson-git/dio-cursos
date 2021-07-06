const myNumber = 12.4032;

// Transformando número em string
const numberAsString = myNumber.toString();
console.log(typeof (numberAsString));

// Retorna número com certo número de casas decimais
const fixedTwoDigits = myNumber.toFixed(2);
console.log(fixedTwoDigits);

//Transformando uma string em Float
console.log(parseFloat(numberAsString));

//Transformando uma string em Integer
console.log(parseInt(numberAsString));
