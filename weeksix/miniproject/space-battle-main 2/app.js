/* eslint-disable */
// Battle Ship ///////////////////////////////////////////////////////////////////////////
// const

// Your Ship
class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  attack() {
    let rand = Math.random();
    if (rand < this.accuracy) {
      invader.hull -= this.firepower;
      alert(`YOUR ATTACK WAS SUCCESSFUL! \n\n PREPARE FOR INCOMING ATTACK...`);
    } else {
      alert(`YOUR ATTACK FAILED! \n\n PREPARE FOR INCOMING ATTACK...`);
    }
  }
}

const defender = new USS_Schwarzenegger();

// Alien Ship
class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
  }

  attack() {
    let rand = Math.random();
    if (rand < this.accuracy) {
      defender.hull -= this.firepower;
      document.querySelector(".alert").textContent = `YOU'VE BEEN HIT!`;
      //alert(`YOU'VE BEEN HIT!`);
    } else {
      document.querySelector(".alert").textContent = `NOT EVEN A SCRATCH!`;
      //alert(`NOT EVEN A SCRATCH!`);
    }
  }
}
const invader = [];
invader[0] = new Alien();
invader[1] = new Alien();
invader[2] = new Alien();
invader[3] = new Alien();
invader[4] = new Alien();
invader[5] = new Alien();

console.log(" invader", invader);
document.querySelector(".alien__hull").textContent = `${invader[0].hull}`;
document.querySelector(
  ".alien__firepower"
).textContent = `${invader[0].firepower}`;
document.querySelector(
  ".alien__accuracy"
).textContent = `${invader[0].accuracy}`;

// Initiate Game
const init = () => {
  document.querySelector(".alert").textContent = "Welcome to SPACE+++BATTLE!";
  // alert("Welcome to SPACE+++BATTLE!");
  const response = prompt(`Enter 'p' to play or 'q' to exit.`);
  if (response.toLowerCase() === "q") {
    document.querySelector(".alert").textContent = "Good-bye!";
    //alert(`Good-bye!`);
  } else if (response.toLowerCase() === "p") {
    document.querySelector(".alert").textContent =
      "Earth has been attacked by a horde of aliens!\n\nYou are the captain of the USS Schwarzenegger.\n\nYour mission is to destroy every last alien ship.";
    // alert(
    //   "Earth has been attacked by a horde of aliens!\n\nYou are the captain of the USS Schwarzenegger.\n\nYour mission is to destroy every last alien ship."
    // );
    lockAndLoad();
  } else {
    document.querySelector(
      ".alert"
    ).textContent = `I don't understand your response.\n\nTry again next time!`;
    //alert(`I don't understand your response.\n\nTry again next time!`);
  }
};

// Check Status
const status = () => {
  alert(
    `Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${
      defender.firepower
    } | ACCURACY: ${
      defender.accuracy * 100
    }%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${
      invader.firepower
    } | ACCURACY: ${Math.floor(invader.accuracy * 100)}%`
  );
};

// Get Ready to Battle
invaderCount = 6;

const lockAndLoad = () => {
  status();

  while (invaderCount > 0) {
    if (invader.hull < 1) {
      invaderCount--;
    }

    if (invaderCount > 0 && defender.hull > 0) {
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3);
      invader.firepower = Math.floor(Math.random() * (5 - 2) + 2);
      invader.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    } else if (invaderCount < 1 && defender.hull < 1) {
      return alert(`TIE GAME!`);
    } else if (invaderCount < 1 && defender.hull > 0) {
      return alert(`YOU HAVE DEFEATED ALL ALIENS`);
    } else {
      return alert(`YOU LOSE!`);
    }

    const response = prompt(`Enter 'a' to attack or 'q' to retreat`);
    if (response.toLowerCase() === "q") {
      alert(`YOU LOSE!`);
      defender.hull = 0;
      defender.firepower = 0;
      defender.accuracy = 0;
      status();
    } else if (response.toLowerCase() === "a") {
      engage();
    } else {
      alert(`I don't understand your response.\n\n Try again!`);
    }
  }
};

// Battle
const engage = () => {
  defender.attack();
  invader.attack();
  lockAndLoad();
};

//init(); // Initialize
