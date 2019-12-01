// Spread operator
let arr1 = [1, 2, 3, 4, 5, 6, 7];

let arr2 = [...arr1];

console.log(arr2); // [1,2,3,4,5,6,7]

// Rest operator
function sum(...theArgs) {
  let total = theArgs.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
