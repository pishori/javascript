const profileData = {
  name: "Alvin",
  age: 24,
  nationality: "Kenyan",
  location:"South B"
}

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

// When 'stats' is passed to the 'half' function, the 'max' and 'min' values are destructured from the function parameter for use within the function.