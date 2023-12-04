/*
class Book {
  constructor(author) {
  this._author = author;
  }
  // getter
  get writer() {
  return this._author;
  }
  // setter
  set writer(updatedAuthor) {
  this._author = updatedAuthor;
  }
 }
 const novel = new Book('anonymous');
 console.log(novel.writer);
 novel.writer = 'newAuthor';
 console.log(novel.writer);
*/

 //*
class Thermostat {
  constructor (fahrenheitTemp){
    this._temp = fahrenheitTemp;
  }

  // getter that obtain the temperature in Celsius
  get temperature () {
     return ( 5/9 * (this._temp - 32))      // returns the fahrenheit argument input into celcius
  }

// setter that accepts a temperature in Celsius.
  set temperature (celciusTemp) {
    this._temp = ((celciusTemp * 9/5) + 32) ;   //celcius to fahrenheit
    return celciusTemp
  }
}

//getter
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

//setter
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
//*/