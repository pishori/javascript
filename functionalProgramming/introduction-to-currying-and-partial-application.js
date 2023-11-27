/*
function add(x,y,z){
  return x + y + z;
}
console.log(add(10,20,30));
*/

/*
function add(x) {
    return function (y){
      return function (z){
        return x + y + z
      }
    }
}
console.log (add(10)(20)(30));
*/

const add = x => y => z => x + y + z;
console.log (add(10)(20)(30));

