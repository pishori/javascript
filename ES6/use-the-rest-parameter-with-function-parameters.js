// The rest parameter allows us to use array methods on the parameters passed to the function as arguments.

/*
function howMany(...args) {
 return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
*/

/*
const howMany = (...any) => "You have passed " + any.length + " arguments.";
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
*/

/*
 const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
  return total;
}
console.log(sum(5,10,15));
*/

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9));

