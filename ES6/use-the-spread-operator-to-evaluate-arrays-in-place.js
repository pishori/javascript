// The spread operator allows us to expand arrays and other expressions in places where multiple parameters are expected.
// It only works in-place, like in an argument to a function or in an array literal.

const arr = [6, 89, 3, 45];
//const maximus = Math.max(arr)         // Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
//const maximus = Math.max.apply(null, arr);    // ES5 syntax
const maximus = Math.max(...arr)        // argument to a function
console.log(maximus);


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];       // array literal.

console.log(arr2);
