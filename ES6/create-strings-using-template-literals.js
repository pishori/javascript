/*
const person = {
  name: "Alvin Tom",
  b: " Muchelle",
  age: 24
};

const greeting = `Hello, my name is ${person.name + person.b}! 
I am ${person.age} years old.`;

console.log(greeting);
*/


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
      failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
    }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);