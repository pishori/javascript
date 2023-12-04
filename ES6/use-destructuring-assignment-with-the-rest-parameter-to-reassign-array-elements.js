/*
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);    // a and b have values of 1 and 2
console.log(arr);    // arr has a value of [3, 4, 5, 6, 7]
*/

function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
    return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(a, b);
console.log(sourceWithoutFirstTwo);