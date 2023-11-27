// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(arr, bookName) {
let newArray = [...arr];
  newArray.push(bookName);
  return newArray;
    
}


function remove(arr, bookName) {
  let newArray = [...arr]
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    
    }
}

/*
unction add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list 
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}
*/
console.log (add(bookList, "Alvin"));
console.log (remove (bookList, "The Hound of the Baskervilles"));
console.log(bookList);