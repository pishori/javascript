const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },

    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
    
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree);

  const ourPets = [
    {   
    animalType: "cat",
    names: [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
      ]
    },

    {
    animalType: "dog",
    names: [
    "Spot",
    "Bowser",
    "Frankie"
      ]
    }
  ];

   const catName = ourPets[0].names[1];
   const dogName = ourPets[1].names[0];

   console.log(catName);
   console.log(dogName);
   
   