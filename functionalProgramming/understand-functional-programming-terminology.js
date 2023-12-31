// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


let tea4GreenTeamFCC = null;
let a = getTea (prepareGreenTea, 27);
tea4GreenTeamFCC = a;

let tea4BlackTeamFCC = null;
let b = getTea (prepareBlackTea, 13);
tea4BlackTeamFCC = b;


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);