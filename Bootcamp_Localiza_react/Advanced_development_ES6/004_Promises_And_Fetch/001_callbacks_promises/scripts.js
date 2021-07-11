// Callback Hell

function doSomething(callback) {
  //did something

  setTimeout(() => {
    callback('First Data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(() => {
    //dit other thing

    callback('Second Data');
  }, 1000);
}

function doAll() {
  doSomething(data => {
    let processedData = data.split('');

    doOtherThing(data2 => {
      let processedData2 = data2.split('');

      setTimeout(() => {
        console.log(processedData, processedData2);
      }, 1000)
    });
  });
}

doAll();

// Now Using Await Async

const doSomethingPromise = () => new Promise((resolve, reject) => {
  // throw new Error('Oops, Something went wrong')
  setTimeout(() => {
    resolve('First Data');
  }, 1200)
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Data');
  }, 1000)
});

async function doAllPromises() {
  // Pending 
  // Fulfilled
  // Rejected

  try {
    const result1 = doSomethingPromise();
    const result2 = doOtherThingPromise();

    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

doAllPromises();

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(resolve => {
  console.log(resolve)
})
