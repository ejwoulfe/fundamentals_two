// Prototypes

Array.prototype.print = function() {
  return "This whats inside the current Array: " + this;
};

let arr = [1, 2, 3];

console.log(arr.print());
