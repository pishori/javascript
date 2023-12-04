// Destructuring assignment is a special syntax introduced in ES6, for neatly assigning values taken directly from an object.

const user = {names: 'John Doe', age: 34 };   // object called user

//ES5
/*
const names = user.name;
console.log(names);   // 'name' has the value 'John Doe'
const age = user.age; 
console.log(age);   // 'age' value is 34
*/

//ES6
const { names, age } = user;    //Variables are created and assigned their respective values from the 'user' object.
console.log(names);
console.log(age);


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today);
console.log(tomorrow);

//ES5

/*
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow; 
*/