function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("chew chew chew");
  },
   describe: function () {
     console.log("My name is " + this.name)
   }
};