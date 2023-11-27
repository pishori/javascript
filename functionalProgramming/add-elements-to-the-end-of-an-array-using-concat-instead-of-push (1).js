function nonMutatingPush(original, newItem) {
  
  return original.concat(newItem);
  
}
/*
function push(original, newItem) {
  
  return original.push(newItem);
  
}
*/
const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingPush(first, second));
console.log(first);
console.log(second);

/*
push(first, second);
console.log(first, second);
*/