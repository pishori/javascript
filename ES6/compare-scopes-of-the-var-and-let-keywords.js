/*
var numArray = [];
//var i = 0;
for (var i = 0; i < 3; i++) {
 numArray.push(i);
}
console.log(numArray);
console.log(i);
*/

/*
var printNumTwo;
for (var i = 0; i < 3; i++) {
 if (i === 2) {
 printNumTwo = function() {
 return i;
 };
 }
}
console.log(printNumTwo());
console.log(i);
*/

let printNumTwo;
for (let i = 0; i < 3; i++) {
 if (i === 2) {
 printNumTwo = function() {
 return i;
 };
 }
}
console.log(printNumTwo());
console.log(i); // 'i' is not defined as it has only been declared locally in the "for" statement and not in the global scope.

/*
function checkScope() {
  let i = 'function scope';
  if (true) {
  let  i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}*/

/*
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
} 
checkScope()
*/