let example = 10;

console.log(myFunction()); // hoisted

function myFunction() {
  console.log(example); // undefined

  var example = 5;

  console.log(example); // 5

  return "hoisted";
}
