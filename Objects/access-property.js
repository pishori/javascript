//Dot Notation

const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  const hatValue = testObj.hat;      
  const shirtValue = testObj.shirt; 
  
  console.log(hatValue);

  // Bracket Notation

  const testObject = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObject["an entree"];   
  const drinkValue = testObject["the drink"];  
  
  //For access to a property using bracket notation, property has to be a string; if it has spaces too.

  //Using Variables

const object = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];  
console.log(player);

/*Note that we do not use quotes around the variable name (playerNumber) when using it to 
  access the property because we are using the value (16) of the variable, not 
  the name.*/
