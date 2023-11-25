let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

/*let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // Looks to make sure the element in the search pattern is there, but won't actually return it. A positive lookahead is used as (?=...) where the ... is the required part that is not returned (matched).

let qRegex = /q(?!u)/; //Looks to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
let a = quit.match(quRegex);
let b = noquit.match(qRegex);
console.log(a,b)*/