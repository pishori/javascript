const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"]
    },

    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"]
    },

    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"]
    },

    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"]
    }

  ];
  
  function lookUpProfile(name, property) {
  
  for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) { // Check IF "name" is an actual contact's firstName.

        if (contacts[i].hasOwnProperty(property))  {      // AND the given property is a property of that contact.
          return contacts[i][property];     // If both are true, return the "value" of that property.
        } 

        else {
          return "No such property";      // If the second if statement fails, No such property is returned.
        }

      }
      // If the first if statement fails, the for loop continues on to the next object in the contacts list.
    } 
    return "No such contact";             /* If the firstName parameter is not matched by the final contacts object, 
    the for loop exits and No such contact is returned.*/
  }
  
  lookUpProfile("Akira", "likes"); //Return ["Pizza", "Coding", "Brownie Points"]

  lookUpProfile("Kristian", "lastName") // should return the string "Vos"

  lookUpProfile("Sherlock", "likes") // should return ["Intriguing Cases", "Violin"]

  lookUpProfile("Harry", "likes") // should return ["Hogwarts", "Magic", "Hagrid"]

  lookUpProfile("Bob", "number") //should return the string "No such contact"
  
  lookUpProfile("Bob", "potato") //should return the string "No such contact"

  lookUpProfile("Akira", "address") //should return the string "No such property"
  
  
  
  
