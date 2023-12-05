// Destructuring assignment is a special syntax introduced in ES6, for neatly assigning values taken directly from an object.

//EXTRACTING VALUES FROM OBJECTS

const user = {names: 'John Doe', age: 34 };   // object called user

//ES5
/*
const names = user.name;
console.log(names);   // 'name' has the value 'John Doe'
const age = user.age; 
console.log(age);   // 'age' value is 34
*/

/*
//ES6
const { names, age } = user;    //Variables are created and assigned their respective values from the 'user' object.
console.log(names);
console.log(age);
/*

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




//ASSIGNING NEW VARIABLE IDENTIFIERS

// Destructuring allows you to assign a new variable name when extracting values.

// const user = { name: 'John Doe', age: 34 };
// const { name: userName, age: userAge } = user;

/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES
console.log(highToday);
console.log(highTomorrow);
/*

//ES5
/* 
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
*/




//ASSIGN VARIABLES FROM NESTED OBJECTS

/*
//Object
const user = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
 */

// Extracting the values of object properties and assigning them to variables with the same name
// const { johnDoe: { age, email }} = user

// And here's how you can assign an object properties' values to variables with different names:
// const { johnDoe: { age: userAge, email: userEmail }} = user;

/*
const LOCAL_FORECAST = {
  yesterday: {
     low: 61, 
     high: 75
  },

  today: { 
    low: 64, 
    high: 77 
  },

  tomorrow: { 
    low: 68, 
    high: 80 
  }
};
  
const {today: {low : lowToday, high : highToday}} = LOCAL_FORECAST
console.log(lowToday); 
console.log(highToday); 
*/    

/*
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
*/




//ASSIGN VARIABLES FROM NESTED ARRAYS

/* One key difference between the spread operator and array destructuring is 
that the spread operator unpacks all contents of an array into a comma separated list. 
Consequently, you cannot pick or choose which elements you 
want to assign to variables.
*/ 

/*
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
*/

/*
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
*/

/*
let a = 8, b = 6;
[a,b] = [b, a];

console.log(a, b);
*/




//DESTRUCTURING VIA REST ELEMENTS

/*
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);    // a and b have values of 1 and 2
console.log(arr);    // arr has a value of [3, 4, 5, 6, 7]
*/

/*
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
    return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(a, b);
console.log(sourceWithoutFirstTwo);
*/




//PASSING AN OBJECT AS A FUNCTION'S PARAMETERS

/*
const profileData = {
  name: "Alvin",
  age: 24,
  nationality: "Kenyan",
  location:"South B"
}
*/
/*
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
 }
*/

// This effectively destructures the object sent into the function. This can also be done in-place:
//const profileUpdate = ({ name, age, nationality, location }) => {}

/* 
When profileData is passed to the above function, i.e 
profileUpdate(profileData)
the values are destructured from the function parameter for use within the function.
*/

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

const half = ({max, min}) => (max + min) / 2.0;       // line 15
const average = half(stats);                         // line 19
console.log(average);
/*

/* 
When 'stats' is passed to the 'half' function, 
the 'max' and 'min' values are destructured 
from the function parameter for use within the function.
*/