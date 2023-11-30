
const increment = (number, value = 1) => number + value;
console.log(increment(5,2));        //The result of increment(5, 2) should be 7.
console.log(increment(5));          //The result of increment(5) should be 6. Default parameter kicks in when the argument is not specified.


const greeting = (name = "Anonymous") => "Hello " + name;      //Parameter 'name' has a default value when no argument is passed into the function (line 9)
console.log(greeting("John"));
console.log(greeting());
 