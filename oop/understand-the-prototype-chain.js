function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

let isItPrototype = Dog.prototype.isPrototypeOf(beagle);  

console.log(isItPrototype);


Object.prototype.isPrototypeOf(Dog.prototype);

function Bird(name) {
  this.name = name;
}

let dataType = typeof Bird.prototype;
console.log(dataType)