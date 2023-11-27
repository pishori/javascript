function alphabeticalOrder(arr) {
  
  return arr
            .sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/* 
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].
*/