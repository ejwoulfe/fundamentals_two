// var, let, const
// let and const introduced with ES6

// let and const have block scope, while var has lexical scope.
// const variables cannot be reinstantiated elsewhere but can still be changed

let num1 = 5;
const num2 = 10;

num1 = 10; // allowed
num2 = 11; // not allowed

// var are also hoisted, while let and const are not.

// HOISTING
function varTest() {
  console.log(varExample); // undefined
  var varExample = 10;
}

//varTest();

function letTest() {
  console.log(letExample); // ReferenceError!
  let letExample = 10;
}
//letTest();

function constTest() {
  console.log(constExample); // ReferenceError!
  const constExample = 10;
}
//constTest();

// SCOPES
function varScope() {
  if (true) {
    var num = 10;
  }

  return num;
}

console.log(varScope()); // 10

function letScope() {
  if (true) {
    let num = 10;
  }

  return num;
}

console.log(letScope()); // num is not defined
