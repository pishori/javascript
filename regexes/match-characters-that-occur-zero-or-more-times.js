// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; 
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);

/*Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.

Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.*/