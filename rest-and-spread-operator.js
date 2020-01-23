// Rest and spread operator, introduced in ES6.

let arr = [1, 2, 3, 4];

function spreadOp(...values) {
  console.log(...values);
}

spreadOp(arr); // (4) [1, 2, 3, 4]
console.log(...arr); // 1 2 3 4
