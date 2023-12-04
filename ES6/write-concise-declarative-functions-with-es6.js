/* //ES5
 const person = {
 name: "Taylor",
 sayHello: function() {
 return `Hello! My name is ${this.name}.`;
 }
}
console.log(person.sayHello());
 */

/* //ES6
const person = {
  name: "Taylor",
  sayHello() {
  return `Hello! My name is ${this.name}.`;
  }
 };
 console.log(person.sayHello());
 */

 /* //ES5
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
*/
 
/* //ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
*/