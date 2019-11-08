function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount) {
  console.log(this.name + " is eating.");
  this.energy += amount;
};
Animal.prototype.sleep = function(length) {
  console.log(this.name + " is sleeping.");
  this.energy += length;
};
Animal.prototype.play = function(length) {
  console.log(this.name + " is playing.");
  this.energy -= length;
};

///////////////////////////////////////////////////////////

function Dog(name, energy, breed) {
  Animal.call(this, name, energy);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  console.log("Woof Woof");
  this.energy -= 0.1;
};

Dog.prototype.constructor = Dog;
const fred = new Dog("Fred", 10, "Husky");
fred.play(5);
fred.sleep(10);
console.log(fred.energy);
