// Closure

let closures = (function() {
  let secretNumber = 5;
  return function() {
    return secretNumber;
  };
})();

console.log(closures()); // 5
console.log(closures() + 5); // 10

function closure2() {
  let y = 20;
  function inside() {
    let z = 15;
    let result = z + y;
    return result;
  }
  return inside();
}

console.log(closure2()); // 35
