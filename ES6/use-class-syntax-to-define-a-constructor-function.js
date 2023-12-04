/* //ES5
function Vegetable(name) {
  this.name = name;
}
const martial = new Vegetable("martial"); // new instance of Vegetable with name property set to carrot.
console.log(martial.name);
*/

/*
In ES6, a class declaration has a constructor method that is invoked with 
the new keyword. If the "constructor" method is not explicitly defined, then it is 
implicitly defined with no arguments
 */

/*
class Vegetable{
  constructor (name, colour) {
    this.name = name;
    this.colour = colour;
  }
}

const carrot = new Vegetable('carrot','orange'); // values are passed in as the arguments
console.log(carrot.name, carrot.colour); // Should display 'carrot' and 'orange' 
*/

//*
// Explicit constructor ES6
class SpaceShuttle {
  constructor(targetPlanet) {
  this.targetPlanet = targetPlanet;
  }

  takeOff() {                         // a method written in es6 (Write Concise Declarative Functions with ES6)
  console.log("To " + this.targetPlanet + "!");
  }
 }
 const zeus = new SpaceShuttle('Jupiter');
 zeus.takeOff();        // prints "To Jupiter!" in console
 //*/

//*
// Implicit constructor  ES6
class Rocket {
  launch() {                  //line 47 comments
  console.log("To the moon!");
  }
 };
 const atlas = new Rocket();
atlas.launch();     // prints "To the moon!" in console
//*/

/* //ES5
function SpaceShuttle (targetPlanet){
  this.targetPlanet = targetPlanet;
};

const zeus = new SpaceShuttle('Jupiter');

function takeOff() {
    console.log("To " + zeus.targetPlanet + "!")
}
takeOff();
*/

/*
function Rocket () {
  console.log("To the moon!")
}
const atlas = new Rocket();
*/