const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  myDog.name = "Happy Coder";    // Update "name" property

  console.log(myDog.name);

  myDog["bark"] = "woof";     //add "bark" property

  console.log(myDog);

  delete myDog.tails;       //delete "tails" property

  console.log(myDog);
  