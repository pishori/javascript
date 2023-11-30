/*
const doubler = (item) => item * 2;     // If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
doubler(4);
console.log(doubler(4));
*/

/*
const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));
*/

/*
 const myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));     //myConcat() should return [1, 2, 3, 4, 5]
*/

const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));