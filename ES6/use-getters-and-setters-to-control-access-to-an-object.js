class Thermostat {
  constructor (fahrenheitTemp){
    this._temp = fahrenheitTemp;
  }

  get temperature () {
     return ( 5/9 * (this._temp - 32))
  }

  set temperature (celciusTemp) {
    this._temp = ((celciusTemp * 9/5) + 32) ;
    return celciusTemp
  }

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);