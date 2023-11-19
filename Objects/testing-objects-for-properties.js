/* theObject.hasOwnProperty(theProperty) returns true or false,
depending on if the property is found on the object or not.*/


function checkForProperty(object, property) {
 return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false


function checkObj(object, property) {
  
 if (object.hasOwnProperty(property)) {       // property passed to 'property' argument
   
  return object[property];   // If found on object, the property's value is returned. 
  
 } 
    return "Not Found";     //If not, return Not Found.
  
}