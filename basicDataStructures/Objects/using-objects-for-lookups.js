function phoneticLookup(val) {
  
     const lookup = {
     
      alpha : "Adams",
      bravo : "Boston",
      charlie : "Chicago",
      delta: "Denver",
      echo : "Easy",
      foxtrot : "Frank"

    };
    return lookup[val];
  }
  
  phoneticLookup("charlie");

console.log(phoneticLookup("charlie"));

  /*function phoneticLookup(val) {
  let result = "";

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));*/