/*
To use the .match() method, apply the method on a string and pass in the regex 
inside the parentheses.
The method returns the match found.
 */

//1
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log("1. " + result);


//FIND MORE THAN ONE MATCH

/*
 To search or extract a pattern more than once, you can use the global search 
flag: g
 */

//2
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
result = twinkleStar.match(starRegex);
console.log("2. " + result);


//MATCHING A SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES

/*
Character classes allow you to define a group of characters you wish to match 
by placing them inside square ([]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the 
regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the 
characters a, i, or u.
 */

/*3*/   let bigStr = "big";
/*4*/   let bagStr = "bag";
/*5*/   let bugStr = "bug";
/*6*/   let bogStr = "bog";

let bgRegex = /b[aiu]g/;

result = bigStr.match(bgRegex);
console.log("3. " + result);

result = bagStr.match(bgRegex);
console.log("4. " + result);

result = bugStr.match(bgRegex);
console.log("5. " + result);

result = bogStr.match(bgRegex);
console.log("6. " + result);

//7
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
result = quoteSample.match(vowelRegex);
console.log(`7. ${result}`);


//MATCH LETTERS OF THE ALPHABET

/*
Inside a character set, you can define a range of characters to match using a 
hyphen character: -.
 */

/*8*/   let catStr = "cat";
/*9*/   let batStr = "bat";
/*10*/   let matStr = "mat";

let atRegex = /[a-e]at/;

result = catStr.match(atRegex);
console.log(`8. ${result}`);

result = batStr.match(atRegex);
console.log(`9. ${result}`);

result = matStr.match(atRegex);
console.log(`10. ${result}`);

//11 and 12
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
result = quoteSample.match(alphabetRegex); 
console.log(`11. ${result}
12. ${result.length}`);


//MATCH NUMBERS AND LETTERS OF THE ALPHABET

//13 and 14
let jennyStr = "Jenny8675309";
myRegex = /[a-z0-9]/ig;
result = jennyStr.match(myRegex);
console.log(`13. ${result}
14. ${result.length}`);


//15 and 16
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/ig; 
result = quoteSample.match(myRegex); 
console.log(`15. ${result}
16. ${result.length}`);