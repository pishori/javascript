
const recordCollection = {    // musical album collection object containing albums that are also objects.
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },

    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },

    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },

    5439: {
      albumTitle: 'ABBA Gold'
    }

  };
  
  function updateRecords(records, id, property, value) {

  /*  records - an object containing several individual albums.
      id - a number representing a specific album in the records object.
      prop - a string representing the name of the album’s property to update.
      value - a string containing the information used to update the album’s property. */

      // IF value is an empty string, delete the given prop property from the album.

    if (value === "") {
      delete records[id][property];
    }
    
    // IF property isn't tracks AND value is not an empty string, assign the value to that album's property. 
    // (first and seventh tests - pass both conditions ) (third and sixth tests - don't satisfy 2nd condition)

    else if (property !== "tracks" && value !== "") {
      records[id][prop] = value;
    } 
    
    //IF prop is tracks and value isn't an empty string, you need to update the album's tracks array.
    // (second and forth tests - pass both conditions.)
    
    else if (property === "tracks" && value !== "") {
    
    // First, IF the album does not have a tracks property, assign it an empty array.
    // (second test)
    
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][property] = [];
      }

      // Then add the value as the last item in the album's track array.
      // (second test) (forth test) (sixth passes as it appends value to the array elements)

      records[id][property].push(value);

    }

    return records;     //function must always return the entire records object.
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA'); // "artist" should be the string ABBA

  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  // "tracks" should have the string "Take a Chance on Me" as the last and only element.
  
  updateRecords(recordCollection, 2548, "artist", ""); //"artist" should not be set

  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  // "tracks" should have the string "Addicted to Love" as the last element.

  updateRecords(recordCollection, 2468, "tracks", "Free");
  // "tracks" should have the string "1999" as the first element.

  updateRecords(recordCollection, 2548, "tracks", ""); 
  // "tracks" should not be set.

  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
  // "albumTitle" should be the string "Riptide."


  /*function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][property];
    } else if (property === "tracks") {
      records[id][property] = records[id][property] || []; // shortcircuit evaluation
      records[id][prop].push(value);
    } else {
      records[id][prop] = value;
    }*/
  
  /*const album = records[id];
    // Update the album
    if (value === "") {
      delete album[prop];
    } else if (prop !== "tracks") {
      album[prop] = value;
    } else {
      album["tracks"] = album["tracks"] || [];
      album["tracks"].push(value);
    }*/
  
  
    