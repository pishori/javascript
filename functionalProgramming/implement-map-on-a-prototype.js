Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};


/*
const newArray = [];
    this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
  );
  return newArray;
*/

/*
[23, 65, 98, 5, 13].myMap(item => item * 2) should equal [46, 130, 196, 10, 26].
["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()) should return ["NAOMI", "QUINCY", "CAMPERBOT"].
[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) should return [1, 2, 5, 2, 1].
*/