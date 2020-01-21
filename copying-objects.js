let obj1 = {
  firstName: "Ed",
  lastName: "Woulfe"
};

// Shallow Copy, references obj1. All changes to obj1 will change obj2.
let obj2 = obj1;

// Deep Copy, same properties as obj1, but is its own object seperate from obj1. Any changes to obj1 will not apply to obj3.
let obj3 = JSON.parse(JSON.stringify(obj1));
let obj4 = { ...obj1 };

console.log(obj1); // {firstName: "Ed", lastName: "Woulfe"}
console.log(obj2); // {firstName: "Ed", lastName: "Woulfe"}
console.log(obj3); // {firstName: "Ed", lastName: "Woulfe"}
console.log(obj4);

console.log(Object.is(obj1, obj2)); // true
console.log(Object.is(obj1, obj4)); // false
console.log(Object.is(obj1, obj3)); // false

obj1.ID = 123;

console.log(obj1); // {firstName: "Ed", lastName: "Woulfe", ID: 123}
console.log(obj2); // {firstName: "Ed", lastName: "Woulfe", ID: 123}
console.log(obj3); // {firstName: "Ed", lastName: "Woulfe"}
console.log(obj4); // {firstName: "Ed", lastName: "Woulfe"}
