/*
const s = [5, 6, 7];
//s = [1, 2, 3];      //brings an error; 'const' declaration prevents reassignment of the variable identifier "s".  
s[2] = 45;
console.log(s);
*/

/*
const s = [5, 7, 2];
function editInPlace() {
  
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();
*/


const s = [5, 7, 2];
function editInPlace() {

    const two = s.pop();    // remove last element in the array
    s.unshift(two);         // add it to the beginning of the array
    console.log(s); 
    
}
editInPlace();
