/*
const getMousePosition = (x, y) => ({
  x: x,
  y: y
 });
*/

 //const getMousePosition = (x, y) => ({ x, y });

/*
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
*/

//*
const createPerson = (name, age, gender) => ({name, age, gender})    // 'escape' curly bracket for function body
console.log(createPerson("Alvin", 24, "male"))
//*/

/*
function createPerson(name, age, gender) {
  return ({ name, age, gender });
}
console.log(createPerson("Alvin", 24, "male"))
*/