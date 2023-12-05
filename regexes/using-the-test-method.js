/*
 The .test() method takes the regex, applies it to a string 
(which is placed inside the parentheses), and returns true or false if your pattern 
finds something or not.
 */

// MATCH LITERAL STRINGS
//1
let testStr = "freeCodeCamp";
let testRegex = /Code/;
let result = testRegex.test(testStr);
console.log("1. " + result);

//2
testStr = "Hello, World!";
testRegex = /Hello/;
result = testRegex.test(testStr); 
console.log("2. " + result);

//3
testStr = "Hello, my name is Kevin.";
testRegex = /kevin/;
result = testRegex.test(testStr);
console.log("3. " + result);


// MATCH LITERAL STRING WITH DIFFERENT POSSIBILITIES
//4
let petString = "James has a pet cat.";
let petRegex = /dog|bird|cat|fish/; 
result = petRegex.test(petString);
console.log("4. " + result);


//IGNORE CASE WHILE MATCHING
//5
let myString = "freeCodeCamp";
let fccRegex = /freeCODecAmp/i; 
result = fccRegex.test(myString);
console.log("5. " + result);


//MATCH ANYTHING WITH WILDCARD PERIOD 
//6 and 7
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /h.g/;
result = huRegex.test(humStr);
console.log("6. " + result);
result = huRegex.test(hugStr);
console.log("7. " + result);

//8
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
result = unRegex.test(exampleStr);
console.log("8. " + result);