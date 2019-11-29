// Dot notation and Bracket notation
// I usually use dot notation, but if I needed to loop through the propertys I use bracket inside a for in loop.
let person = {
  firstName: "ed",
  lastName: "woulfe",
  ID: 123
};

person.firstName; // ed
person["firstName"]; // ed

for (let key in person) {
  console.log(key); // firstName, lastName, ID
  console.log(person[key]); // ed, woulfe, 123
  console.log(person.key); // undefined, undefined, undefined
}
