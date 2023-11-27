const squareList = arr => {
  
  return arr   
     /*
     .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
    */

    .reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
          ? sqrIntegers.concat(num * num)
          : sqrIntegers;
      }, []);
    
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
function  parses(num) {
  return parseInt(num)
}
console.log(parses())
*/
