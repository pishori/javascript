function checkPositive(arr) {
  return arr.every(function(val){
    return val > 0;
  }); 
  // return arr.every(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);