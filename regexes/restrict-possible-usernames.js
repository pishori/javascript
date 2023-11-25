let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$|^[a-zA-Z][a-zA-z]$|^[a-zA-Z][0-9]{2,}$/; 
let result = userCheck.test(username);
console.log(result);


/* 
Your regex should match the string JACK
Your regex should not match the string J
Your regex should match the string Jo
Your regex should match the string Oceans11
Your regex should match the string RegexGuru
Your regex should not match the string 007
Your regex should not match the string 9
Your regex should not match the string A1
Your regex should not match the string BadUs3rnam3
Your regex should match the string Z97
Your regex should not match the string c57bT3
Your regex should match the string AB1
Your regex should not match the string J%4

let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)