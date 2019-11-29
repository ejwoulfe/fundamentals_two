const arr = [1, 2, 3, 4, 5];

let add5 = value => {
  return value + 5;
};
const arr2 = arr.map(val => add5(val));

// The map function take a call back function. It loops through arr and every loop will callback add5.

console.log(arr2); // [6, 7, 8, 9, 10]
