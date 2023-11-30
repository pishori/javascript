/* One key difference between the spread operator and array destructuring is 
that the spread operator unpacks all contents of an array into a comma separated list. 
Consequently, you cannot pick or choose which elements you 
want to assign to variables.
*/ 

/*
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
*/

/*
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
*/

/*
let a = 8, b = 6;
[a,b] = [b, a];

console.log(a, b);
*/