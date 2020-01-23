// Instance of, checks if the prototype property of a constructor is in the prototype chain of an object.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getNameAndAge() {
    return (
      "This person's name is " + this.name + " and their age is " + this.age
    );
  }
}

let frank = new Person("Frank", 24);

let str = "Hello";
let str2 = new String("Hi");

console.log(frank instanceof Person); // true
console.log(frank instanceof Object); // true
console.log(frank instanceof String); // false
console.log(str instanceof String); // false
console.log(str2 instanceof String); // true
