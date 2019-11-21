// Objects/Arrays pass by reference, to avoid this make a copy.

let num1 = 5;
let num2 = num1;
num2 += 1;

// num1 = 5;
// num2 = 6; (pass by value)

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(5);

// arr1 = [1,2,3,5];
// arr2 = [1,2,3,5]; (pass by reference)

// To avoid this, for arrays

let arr1 = [1, 2, 3, 4];

let arr2 = arr1.map(value => {
  return value;
});

arr2.push(5);

// arr1 = [1,2,3,4]
// arr2 = [1,2,3,4,5]

let user1 = {
  name: "Ed",
  ID: 5
};

let user2 = user1;

user1.age = 26;

// user1 = {name: "Ed", ID: 5, age: 26}
// user2 = {name: "Ed", ID: 5, age: 26} (pass by reference)

// To avoid this, for objects

let user1 = {
  name: "Ed",
  ID: 5
};

let user2 = JSON.parse(JSON.stringify(user1));

user1.age = 26;

// user1 = {name: "Ed", ID: 5, age: 26}
// user2 = {name: "Ed", ID: 5} (pass by value once parsing and stringifying)
