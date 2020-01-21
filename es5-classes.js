function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function(quantity) {
  console.log(this.name + " is eating " + quantity + " calories");
};

Animal.prototype.sleep = function(hours) {
  console.log(this.name + " is sleeping for " + hours + " hours");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  console.log(this.name + " barks.");
};

Dog.prototype.constructor = Dog;
const frank = new Dog("Frank", "Husky");
frank.sleep(8);
frank.eat(400);
frank.bark();
