let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; 
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);


/*regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.
Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.
Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!
Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.*/