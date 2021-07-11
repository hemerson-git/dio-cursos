// fetch('https://baconipsum.com/api/?type=meat').then(response => {
//   console.log(response.status)

//   if (response.status !== 200) {
//     throw new Error(`Error: ${response.status}`)
//   };

//   return response.json();
// }).then(data => {
//   data.forEach(paragraph => console.log(paragraph));
// }).catch(error => {
//   console.log(error);
// });



// Now with Async/Await

async function simpleFunction() {
  try {
    const response = await fetch('https://baconipsum.com/api/?type=meat');
    const body = await response.json();

    console.log(body);
  } catch (error) {
    console.log(error);
  }
}

simpleFunction();
