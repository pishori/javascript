/*
const myFunc = function() {
  const myVar = "value";
  return myVar;
 }
 console.log(myFunc())
*/

/*
const myFunc = () => {
 const myVar = "value";
 return myVar;
}
*/

/*
const myFunc = () => "value";
console.log(myFunc())
*/

/*
const magic = function() {
  return new Date();
};
console.log(magic());
*/

/* named function version of the below ES6 syntax
function magic() {
  return new Date();
}
console.log(magic());
*/

const magic = () => new Date();
console.log(magic());