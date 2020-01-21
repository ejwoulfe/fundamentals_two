class Employee {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  presentOccupation() {
    return this.name + " is a " + this.job;
  }
  presentAge() {
    return this.name + " is " + +this.age;
  }
  presentFullName(lastName) {
    return this.name + " " + lastName;
  }
}

let frank = new Employee("Frank", 27, "Developer");
let rob = new Employee("Rob", 32, "Developer");

console.log(frank.presentOccupation());
console.log(frank.presentAge());
console.log(frank.presentFullName("Smith"));

class Manager extends Employee {
  constructor(name, age, job, employees) {
    super(name, age, job);
    this.employees = employees;
  }
  listOfEmployees() {
    return this.name + " manages " + this.employees;
  }
}
let john = new Manager("John", 38, "Manager", [frank.name, rob.name]);
console.log(john.presentOccupation());
console.log(john.listOfEmployees());
