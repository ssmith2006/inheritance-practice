"use strict";

// console.log("My name is Shantel")

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} will make a noise.`);
  }
}
class Dog extends Animal {
  //this is the child class: Dog. The dog class inherits the properties and methods of the Animal Class.
  constructor(name, breed) {
    super(name); //calls the parent class constructor "name"
    this.breed = breed; //new property that is not part of the Animal class
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const animal = new Animal ("Parent Animal");
animal.speak();

const dog = new Dog ("Gabe");
dog.speak();