class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(this.name + " is eating.");
    this.energy += amount;
  }
  sleep(length) {
    console.log(this.name + " is sleeping.");
    this.energy += length;
  }
  play(length) {
    console.log(this.name + " is playing.");
    this.energy -= length;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }
  bark() {
    console.log("Woof Woof");
    this.energy -= 0.1;
  }
}

let fred = new Dog("Fred", 100, "Husky");

console.log(fred);
