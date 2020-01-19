// Closure - A way in javascript to contain some data, almost like a private variable.
// Allows counter to not be changed by outside functions or other code.

let add = (function() {
  var counter = 0;
  return function() {
    counter += 1;
    return counter;
  };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
