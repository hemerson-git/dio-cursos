let getout = false;
let nota1 = null;
let nota2 = null;
let average = 0;

let inputs = ['-3.5', '3.5', '11.0', '10.0', '4', '1', '8.0', '9.0', '2'];

function isValid(value) {
  return value <= 10 && value >= 0;
}

while(!getout) {
  let value = inputs.shift();
  
  if(!isValid(value)) {
    console.log('nota invalida');
    continue;
  }
  
  if (!nota1) {
    nota1 = parseFloat(value);
  } else {
    nota2 = parseFloat(value);
    average = (nota1 + nota2) / 2;
    console.log(`media: ${average.toFixed(2)}`)
    nota1 = null;
    nota2 = null;
  }
  
  let ask = true;
  
  if (average) {
    while(ask) {
      const msg = 'novo calculo (1-sim 2-nao)';
      console.log(msg);
      
      let response = inputs.shift();
      
      if (response && response !== '1' && response !== '2') {
        continue;
      }
      
      ask = false;
      average = 0;
      
      getout = response === '2';
    }
  }
}
