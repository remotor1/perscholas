/* eslint-disable */

// Creating Classes
// You will be working with this class
// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
  constructor(name, color, gender, weight, age) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.age = age;
  }

  printInfo() {
    console.log(
      `Our CAT - ${this.name} ${this.color} ${this.gender} ${this.weight} ${this.age}`
    );
  }
  getAge() {
    return this.age;
  }
  getColor() {
    return this.color;
  }
  getName() {
    return this.name;
  }
}

let cat1 = new Cat("igor", "red", "male", 44, 24);
let cat2 = new Cat("max", "red", "male", 33, 55);

cat1.printInfo();
console.log(cat2.getAge());

// Constructors
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }
  getName() {
    return this.name;
  }
}

const jollyRoger = [
  new Pirate("Vova", 22, "male"),
  new Pirate("Ivan", 33, "male"),
  new Pirate("Piter", 44, "male"),
];

jollyRoger.forEach((pirate) => {
  console.log(
    `jollyRoger ship has -  ${pirate.name}, ${pirate.age}, ${pirate.gender}`
  );
});

const blackPearl = [
  new Pirate("Jack", 34, "male"),
  new Pirate("Bro", 66, "male"),
  new Pirate("Dude", 55, "male"),
];

blackPearl.forEach((pirate) => {
  console.log(
    `blackPearl ship has -  ${pirate.name}, ${pirate.age}, ${pirate.gender}`
  );
});
