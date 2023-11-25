const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


/* const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}*/


// The result of sum(0,1,2) should be 3
// The result of sum(1,2,3,4) should be 10
// The result of sum(5) should be 5
// The result of sum() should be 0
// sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.