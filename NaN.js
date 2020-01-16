console.log(isNaN(20)); // false
let x = {};
console.log(isNaN(x)); // true
console.log(isNaN(NaN)); // true

// isNaN is an object

console.log(x === NaN); // false
console.log(typeof NaN); // number
