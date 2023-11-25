function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false,], 2));

/* The spread operator copies all elements into a new empty object.
The code above will copy all of the elements into newArr but will also reinitialise newArr with every new iteration of the while loop.
A new variable should first be initialised using the spread operator - let obj = [...arr]; - then this variable should be added to the newArr for every iteration of the while loop.*/