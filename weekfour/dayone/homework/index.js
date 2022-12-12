/* eslint-disable */
// Classes Methods and Properties
// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// price - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  //set owner
  setOwner(owner) {
    this.owner = owner;
  }
  // price - log "squeak squeak"
  wheelRun() {
    console.log("squeak squeak");
  }
  // eatFood() - log "nibble nibble"
  eatFood() {
    console.log("nibble nibble");
  }
  // getPrice() - return the price
  getPrice() {
    return this.price;
  }
}
const humpster1 = new Hamster("igor", "petr", 100);
humpster1.wheelRun();
humpster1.eatFood();
console.log(humpster1.getPrice());

// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  // getName() - returns name
  getName() {
    return this.name;
  }
  // getAge() - returns age
  getAge() {
    return this.age;
  }
  // getWeight() - returns weight
  getWeight() {
    return this.weight;
  }
  // greet() - logs a message with person's name
  greet() {
    console.log(this.name);
  }
  // eat() - increment weight, increment mood
  eat(foodWeight) {
    this.weight += foodWeight;
  }
  // exercise() - decrement weight
  exercise(sportLevel) {
    this.weight -= sportLevel;
  }
  // ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
  ageUp(years, height, weight) {
    this.age += years;
    this.height += height;
    this.weight += weight;
    this.mood -= 1 * years;
    this.bankAccount += 10 * years;
  }
  // buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
  }
}

const person1 = new Person("Timmy");
person1.ageUp(5, 1, 2);
person1.exercise(5);
person1.ageUp(9, 5, 6);

const person2 = new Person("Gus");

humpster1.setOwner(person1.getName());
humpster1.setOwner(person2.getName());

person1.ageUp(15, 12, 12);
person1.eat(23);
person1.eat(21);
person1.exercise(23);
person1.exercise(21);

// Chef Make Dinners
// class Dinner {
// }
// class Chef {
// }
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}
const firstDinner = new Dinner("carrot", "mango", "apple");
console.log(firstDinner);
//factory
class Chef {
  constructor(arg1, arg2, arg3) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.dinner = [];
  }

  createDinner() {
    const newDinner = new Dinner(this.arg1, this.arg2, this.arg3);
    this.dinner.push(newDinner);
  }
  dinnerNumber(index) {
    return this.dinner[index];
  }
}

const birthdayDinner = new Chef("carrot", "mango", "apple");
birthdayDinner.createDinner();
birthdayDinner.createDinner();
birthdayDinner.createDinner();
console.log("!birthdayDinner!", birthdayDinner);
console.log("!dinnerNumber!", 2, birthdayDinner.dinnerNumber(2));
