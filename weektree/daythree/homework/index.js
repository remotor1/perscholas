/* eslint-disable */

// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
  static salary = 200000;
  static governorQuantity = 0;

  constructor(firstName, lastName) {
    Governor.governorQuantity += 1;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    console.log(this.firstName, this.lastName);
  }

  static getSalary() {
    console.log(this.salary);
  }
}

Governor.getSalary();

NYCgovernor = new Governor("Igor", "Savin");
console.log(Governor.governorQuantity);

LAgovernor = new Governor("Michele", "I");
console.log(Governor.governorQuantity);

PAgovernor = new Governor("Midf", "Idfr");
console.log(Governor.governorQuantity);

// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
  constructor(height, weight, age) {
    this.height = height;
    this.weight = weight;
    this.age = age;
  }
  getInfo() {
    console.log(this.height, this.weight, this.age);
  }

  getHeigth() {
    console.log(this.height);
  }
  getWeigth() {
    console.log(this.weight);
  }
  getAge() {
    console.log(this.age);
  }
}

class PostalWorker extends Person {
  constructor(height, weight, age) {
    super(height, weight, age);
    this._profession = "PostalWorker";
  }
  getInfo() {
    console.log(this.height, this.weight, this.age, this._profession);
  }
}

class Chef extends Person {
  constructor(height, weight, age) {
    super(height, weight, age);
    this._profession = "Chef";
  }
  getInfo() {
    console.log(this.height, this.weight, this.age, this._profession);
  }
}

worker1 = new PostalWorker(32, 23, 355, "Igor");
worker2 = new PostalWorker(13, 55, 35, "Igdf");
worker3 = new Chef(45, 66, 345, "Idf");
worker4 = new Chef(12, 343, 45, "Igf");

worker1.getInfo();

// -----------------------------3
class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  deposit(quantity) {
    this.balance += quantity;
    console.log(this.balance);
  }
  withdraw(quantity) {
    this.balance -= quantity;
    console.log(this.balance);
  }
}
class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw(quantity) {
    this.balance -= quantity;
    console.log(this.overdraftEnabled, this.balance);
  }
}

class SavingsAccount extends BankAccount {
  constructor(ownerName, balance, acctNum) {
    super(ownerName, balance, acctNum);
  }
  withdraw(quantity) {
    console.log("withdrawals are prohibited");
  }
}
