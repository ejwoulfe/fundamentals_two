// Since Javascript doesn't have types, coercion can occur.

let num1 = 5;
let num2 = "10";

console.log(num1 + num2); // 510
console.log(typeof (num1 + num2)); // string
console.log(num1 + Number(num2)); // 15
