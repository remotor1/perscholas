/* eslint-disable */

const numOfEnemyShips = 6;
const retreatMessage = `Player Retreats!\nGAME OVER`;
const userWon = `Yaay you win!\nGAME OVER`;
const userLost = 'Nooo you loose\nGAME OVER';
let roundCount = 0;
let shipsKillCount = 0;
const timeOutInterval1 = 400;
const timeOutInterval2 = 10000;

/*  randStat() function - generates the states for the class */
const randStat = (min, max, isFloat) => {
  if (isFloat === true) {
    return Math.random() * (max - min) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

const removeShipFromBoard = () => {
  const shipsToKillArr = document.querySelectorAll('.enemy-ship-to-kill');
  shipsToKillArr[shipsKillCount].setAttribute('src', './images/dead.svg');
  shipsToKillArr[shipsKillCount].style.animationName = 'fadeout';
  shipsToKillArr[shipsKillCount].style.animationIterationCount = '1';
  shipsToKillArr[shipsKillCount].style.animationDuration = '0.1s';
  shipsToKillArr[shipsKillCount].style.height = '80px';
  shipsKillCount++;
};

const attack = (attacker, target, updateHelth = 0) => {
  console.log(enemyShips);
  clearText();
  setTimeout(() => {
    textLineOneEl.innerHTML = `<h2>${attacker.name} attacks ${target.name}</h2>`;
  }, timeOutInterval1);
  if (Math.random() < attacker.accuracy) {
    target.hull -= attacker.firepower;
    setTimeout(() => {
      textLineTwoEl.innerHTML = `Hit! ${attacker.name} does ${attacker.firepower} damage!
        ${target.name} health is now ${target.hull}\n`;
    }, timeOutInterval1);
  } else {
    console.log(`${attacker.name} Missed!\n`);
    setTimeout(() => {
      textLineTwoEl.innerHTML = `${attacker.name} Missed!\n`;
    }, timeOutInterval2);
    textLineThreeEl.textContent = '';
  }
  if (updateHelth) {
    textLineThreeEl.textContent = `USS Assembly has ${playerShip.hull} hit points remaining.`;
  }
};

const retreatPrompt = () => {
  buttonsAreaEl.appendChild(attackButtonEl);
  buttonsAreaEl.appendChild(retreatButtonEl);
};

const clearText = () => {
  textLineOneEl.textContent = '';
  textLineTwoEl.textContent = '';
  textLineThreeEl.textContent = '';
};
const gameOver = (message) => {
  setTimeout(() => {
    clearText();
  }, timeOutInterval1);
  setTimeout(() => {
    textLineTwoEl.innerHTML = `<h1>${message}</h1>`;
  }, timeOutInterval2);
  buttonsAreaEl.removeChild(attackButtonEl);
  buttonsAreaEl.removeChild(retreatButtonEl);
  buttonsAreaEl.appendChild(reloadButtonEl);
};

const textEl = document.querySelector('.text');
const textLineOneEl = document.getElementById('text-line-1');
const textLineTwoEl = document.getElementById('text-line-2');
const textLineThreeEl = document.getElementById('text-line-3');
const enemyShipEl = document.querySelector('.enemies');
const buttonsAreaEl = document.querySelector('.buttons');
const playerShipImgEl = document.querySelector('.player-image');
const newGameButtonEl = document.getElementById('new-game');

newGameButtonEl.classList.add('button-style');
const attackButtonEl = document.createElement('button');
attackButtonEl.classList.add('child', 'buttons', 'button-style');
attackButtonEl.textContent = `Attack`;
const retreatButtonEl = document.createElement('button');
retreatButtonEl.classList.add('child', 'buttons', 'button-style');
retreatButtonEl.textContent = 'Retreat';
const reloadButtonEl = document.createElement('button');
reloadButtonEl.classList.add('child', 'buttons', 'button-style');
reloadButtonEl.textContent = 'Reload';

textLineOneEl.innerHTML =
  '<h2>Earth has been attacked by a horde of aliens!</h2>';
textLineTwoEl.innerHTML =
  'You are the captain of the USS Assembly, on a mission to destroy every last alien ship.';
textLineThreeEl.innerHTML =
  'Battle the aliens as you try to destroy them with your lasers.';

newGameButtonEl.addEventListener('click', (etv) => {
  buttonsAreaEl.removeChild(newGameButtonEl);
  enemyShips.generateShips(numOfEnemyShips);
  clearText();
  roundOne();
});

attackButtonEl.addEventListener('click', (etv) => {
  newRound();
});

retreatButtonEl.addEventListener('click', (etv) => {
  gameOver(retreatMessage);
});

reloadButtonEl.addEventListener('click', (etv) => {
  location.reload();
});

// spaceShip class & Factory to build X space ships
class Ship {
  constructor(name, isEnemy = true, hull, firepower, accuracy) {
    this.name = name;
    this.isEnemy = isEnemy;
    if (this.isEnemy === true) {
      this.hull = randStat(3, 6, false);
      this.firepower = randStat(2, 4, false);
      this.accuracy = randStat(0.6, 0.8, true);
    } else {
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = 0.7;
    }
  }
}

class ShipFactory {
  constructor(numOfShips) {
    this.numOfShips = numOfShips;
    this.ships = [];
    this.currEnemy;
  }
  generateShips = () => {
    for (let i = 0; i < this.numOfShips; i++) {
      const newShip = new Ship(`ship${i + 1}`, true);
      this.ships.push(newShip);

      const enemyShipImg = document.createElement('img');
      enemyShipImg.classList.add(
        'images',
        'enemy-ship-to-kill',
        `ship${i + 1}`
      );
      enemyShipImg.setAttribute('src', './images/alien.svg');
      enemyShipEl.appendChild(enemyShipImg);
    }
    this.currEnemy = this.ships[0];
  };
  fetchShip = (index) => {
    return this.ships[index];
  };
  killShip = () => {
    if (this.ships.length > 1) {
      setTimeout(() => {
        textLineThreeEl.append(`${this.currEnemy.name} is the new enemy`);
      }, timeOutInterval1);
      this.ships.shift();
      this.currEnemy = this.ships[0];
      removeShipFromBoard();
    } else {
      this.ships.shift();
      removeShipFromBoard();
      gameOver(userWon);
      return 1;
    }
  };
}

// Instantiate user and enemy ships:
const playerShip = new Ship('USS Assembly', false);
var enemyShips = new ShipFactory(numOfEnemyShips);

// newRound() Function:
const newRound = () => {
  let enemy = enemyShips.currEnemy;
  if (playerShip.hull <= 0) {
    playerShipImgEl.setAttribute('src', 'https://i.imgur.com/2dU2OmK.png');
    gameOver(userLost);
    return;
  } else {
    attack(playerShip, enemy); // Player attacks enemy
    if (enemy.hull <= 0) {
      if (enemyShips.killShip()) {
        return;
      } else {
        const playerSelection = retreatPrompt();
      }
    } else {
      setTimeout(() => {
        attack(enemy, playerShip, 1);
      }, timeOutInterval1);
    }
  }
};

const roundOne = () => {
  textLineTwoEl.innerHTML = `<h1>${numOfEnemyShips} ships immerge</h1>`;
  retreatPrompt();
};
