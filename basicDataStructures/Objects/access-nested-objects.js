/* The sub-properties of objects can be accessed by 
chaining together the dot or bracket notation.*/

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);
  

  const ourStorage = {
    "desk": {
    "drawer": "stapler"
    },
    "cabinet": {
    "top drawer": {
    "folder1": "a file",
    "folder2": "secrets"
    },
    "bottom drawer": "soda"
    }
   };
  const folder2 = ourStorage.cabinet["top drawer"].folder2;
  const drawer = ourStorage.desk.drawer;

  console.log(folder2);
  console.log(drawer);
  
