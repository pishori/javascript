let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor\s|Franklin\s).*Roosevelt/; 
let result = myRegex.test(myString);
console.log(result);