Array.prototype.myFilter = function(callback) {
  const newArray = [];
/*
   for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
*/

/*
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
*/

for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }

  return newArray;
};