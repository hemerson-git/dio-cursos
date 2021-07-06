// Retorna o tamanho de uma string
const text = "I'm just a text";
console.log(text.length);

// Qurbrar a função por meio de um delimitador
const splitedText = text.split("a");
console.log(splitedText);


//Busca por um valor e substitui
const replacedText = text.replace("'m", ' am');
console.log(replacedText);

// retorna a "fatia" de um valor
const lastChar = text.slice(-1)
console.log(lastChar);

const allWithouLastChar = text.slice(0, -1);
console.log(allWithouLastChar);

const secondToEnd = text.slice(1);
console.log(secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPosition = 'Texto'.substr(0, 2);
console.log(twoCharsBeforeFirstPosition);
