//pending promise as there is no method to complete the promise.
const myPromise = new Promise((resolve, reject) => {
});

const makeServerRequest = new Promise((resolve, reject) => {

  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//handle a fulfilled promise with "then"
makeServerRequest.then(result => {
  console.log(result);
});

//handle a rejected promise with catch
makeServerRequest.catch(error => {
  console.log(error);
});