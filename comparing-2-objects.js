// Compare two objects

let user1 = {
  firstName: "Ed",
  lastName: "Woulfe"
};

let user2 = {
  firstName: "Ed",
  lastName: "Woulfe"
};

let user3 = user1;
let user4 = JSON.parse(JSON.stringify(user1));

let user5 = {
  firstName: "Sarah",
  lastName: "Jameston"
};

console.log(user1 === user2); // false
// These objects have the same properties and values, but they are not the same object.

console.log(user3 === user1); // true
// user3 points to user1, so any changes that happen to user1 will change user3.

console.log(user4 === user1); // false
// user4 is a copy of user1, but a totally different object, made possible by stringifying and then parsing it.

// Function that will go through each object and compare their property values.
function compareObjects(obj1, obj2) {
  // Can just do an easy check to see if they are equal lengths, if not then they cannot have the same properties.
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects(user3, user1)); // true
console.log(compareObjects(user5, user1)); // false
