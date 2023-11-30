// Destructuring allows you to assign a new variable name when extracting values.

// const user = { name: 'John Doe', age: 34 };
// const { name: userName, age: userAge } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES
console.log(highToday);
console.log(highTomorrow);

//ES5
/* 
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
*/