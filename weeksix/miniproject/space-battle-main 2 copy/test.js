attack() {
    let rand = Math.random(); // 0...1
    if (rand < this.accuracy) {
      invader.hull -= this.firepower;
      document.querySelector(
        ".action__your"
      ).textContent = `YOUR ATTACK WAS SUCCESSFUL! PREPARE FOR INCOMING ATTACK...`;
    } else {
      document.querySelector(
        ".action__your"
      ).textContent = `YOUR ATTACK FAILED! \n\n PREPARE FOR INCOMING ATTACK...`;
    }
  }

  attack() {
    let rand = Math.random();
    if (rand < this.accuracy) {
      defender.hull -= this.firepower;
      document.querySelector(".action__alien").textContent = `YOU'VE BEEN HIT!`;
    } else {
      document.querySelector(
        ".action__alien"
      ).textContent = `NOT EVEN A SCRATCH!`;
    }
  }

  // aliens counter
let invaderCount = 6;

// start game
const init = () => {
  document.querySelector(".action__title").textContent =
    "Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger.\n\nYour mission is to destroy every last alien ship.";
  statusUpdate();
};

const statusUpdate = () => {
  console.log("invaderCount -", invaderCount);
  document.querySelector(".alien__num").textContent = invaderCount;

  console.log("defender -", defender);
  document.querySelector(".my-ship__hull").textContent = defender.hull;
  document.querySelector(".my-ship__firepower").textContent =
    defender.firepower;

  document.querySelector(".my-ship__accuracy").textContent = defender.accuracy;

  console.log("invader -", invader);
  document.querySelector(".alien__hull").textContent = invader.hull;
  document.querySelector(".alien__firepower").textContent = invader.firepower;
  document.querySelector(".alien__accuracy").textContent = invader.accuracy;
};

// 4)
document.querySelector(".control__attack").addEventListener("click", (e) => {
  e.preventDefault();
  defender.attack(); // 4.1)
  if (invader.hull < 1 && invaderCount < 1) {
    statusUpdate();
    document.querySelector(".action__alien").textContent = "вы побудили";
    return;
  } else {
    statusUpdate();
    invader.attack();
    return;
  }
});

init(); // Initialize

// document.querySelector(".control__retreat").addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(".action__info").textContent = `YOU LOSE!`;
//     defender.hull = 0;
//     defender.firepower = 0;
//     defender.accuracy = 0;
//     statusUpdate();
//   });
