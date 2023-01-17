/* eslint-disable */
// My ship 1)
const action = document.querySelector(".action");

const pause = () => {
  console.log("pause");
  setTimeout(function () {
    // Code to run after the pause
    alert("This is really slow!");
  }, 3000);
};

class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}
let defender = new USS_Schwarzenegger(); // make ship

// publishing my ship info
const refreshMyShip = () => {
  document.querySelector(".my-ship__hull").textContent = defender.hull;
  document.querySelector(".my-ship__firepower").textContent =
    defender.firepower;
  document.querySelector(".my-ship__accuracy").textContent = defender.accuracy;
};

refreshMyShip();

// Alien Ship 2)
class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    this.status = "alive";
  }
}

// create arrea of aliens
let invaders = [];
invaders[0] = new Alien();
invaders[1] = new Alien();
invaders[2] = new Alien();
invaders[3] = new Alien();
invaders[4] = new Alien();
invaders[5] = new Alien();

// publish aliens
function addAlien(invader, number) {
  const alienTemplate = document.querySelector("#alien-card").content;
  const alienElement = alienTemplate.querySelector(".alien").cloneNode(true);
  alienElement.classList.add(`alien-num${number}`);
  alienElement.querySelector(".alien__num").textContent = number;
  alienElement.querySelector(".alien__hull").textContent = invader.hull;
  alienElement.querySelector(".alien__firepower").textContent =
    invader.firepower;
  alienElement.querySelector(".alien__accuracy").textContent = invader.accuracy;
  alienElement.querySelector(".alien__status").textContent = invader.status;
  // добавьте alienElement
  document.querySelector(".aliens-container").append(alienElement);
}

addAlien(invaders[0], 1);
addAlien(invaders[1], 2);
addAlien(invaders[2], 3);
addAlien(invaders[3], 4);
addAlien(invaders[4], 5);
addAlien(invaders[5], 6);

let curentInvider = 0;

document.querySelector(".control__attack").addEventListener("click", (e) => {
  e.preventDefault();
  //мы наносим урон
  let rand = Math.random();
  if (rand < defender.accuracy) {
    // если не промазали
    invaders[curentInvider].hull -= defender.firepower; // ударили
    // выведем изменения
    let curentAlien = document.querySelector(`.alien-num${curentInvider + 1}`);
    curentAlien.querySelector(".alien__hull").textContent =
      invaders[curentInvider].hull;
    curentAlien.querySelector(".alien__status").textContent =
      invaders[curentInvider].status;
    // жив или умер?
    if (invaders[curentInvider].hull < 1) {
      // dead
      console.log(`номер ${curentInvider + 1} убит`);
      action.textContent = `номер ${curentInvider + 1} убит`;
      pause();
      curentAlien.remove();
      if (curentInvider === 5) {
        console.log("и вы победили всех тварей");
        action.textContent = "и вы победили всех тварей";
        pause();
        restartGame();
        return;
      } else {
        console.log("но остались еще твари");
        action.textContent = "но остались еще твари";
        pause();
        curentInvider += 1;
      }
    } else {
      console.log("эта тварь ранена но еще жива продолжай бить ее");
      action.textContent = "эта тварь ранена но еще жива продолжай бить ее";
      pause();
    }
  }
  console.log("промазал сейчас тварь ударит тебя");
  action.textContent = "промазал сейчас тварь ударит тебя";
  pause();

  if (Math.random() < invaders[curentInvider].accuracy) {
    // not miss?
    defender.hull -= invaders[curentInvider].firepower;
    refreshMyShip();
    console.log(`YOU'VE BEEN HIT!`);
    action.textContent = `YOU'VE BEEN HIT!`;
    pause();
    if (defender.hull < 1) {
      console.log(`YOU'VE BEEN killed`);
      action.textContent = `YOU'VE BEEN killed`;
      restartGame();
    }
  } else {
    console.log(`NOT EVEN A SCRATCH!`);
    action.textContent = `NOT EVEN A SCRATCH!`;
    pause();
  }
});

const restartGame = () => {
  invaders = [];
  invaders[0] = new Alien();
  invaders[1] = new Alien();
  invaders[2] = new Alien();
  invaders[3] = new Alien();
  invaders[4] = new Alien();
  invaders[5] = new Alien();
  curentInvider = 0;
  defender = new USS_Schwarzenegger();
  refreshMyShip();
  addAlien(invaders[0], 1);
  addAlien(invaders[1], 2);
  addAlien(invaders[2], 3);
  addAlien(invaders[3], 4);
  addAlien(invaders[4], 5);
  addAlien(invaders[5], 6);
};
