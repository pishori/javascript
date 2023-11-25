class Vegetable{
  constructor(name){
    this.name = name;
  }
}

/*function Vegetable(name) {
  this.name = name;
}*/

const carrot = new Vegetable('carrot'); // value is passed in as the argument

console.log(carrot.name); // Should display 'carrot'