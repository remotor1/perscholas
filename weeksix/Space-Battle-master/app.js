

// class for all ships
class Ship {
    constructor(name,hull, firepower, accuracy){
        this.name = name,
        this.hull = hull || Math.floor(Math.random() * 4) + 3, 
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2,
        this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10

        
    }
    strike (enemy){
        enemy.hull -= this.firepower
    }
        
}

// myship and alienship creation  from class template
const mySpaceShip = new Ship ("USS Schwarzenegger");
console.log(mySpaceShip)

const aliensFirstShip = new Ship("Alien_Ship_One"); 
const aliensSecondShip = new Ship("Alien_Ship_Two");
const aliensThirdShip = new Ship("Alien_Ship_Three");
const aliensFouthShip = new Ship("Alien_Ship_Four");
const aliensFifthShip = new Ship("Alien_Ship_Five");
const aliensSixthShip = new Ship("Alien_Ship_Seven");

console.log(aliensFirstShip)

let gameBegins = () => {
window.alert('Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.');
window.alert('You have a privilege. You attack first.');

        //if aliensFifthShip is not zero (alive)
        while (aliensFirstShip !== 0) { 
            // if mySpaceShip is alive     
            if (mySpaceShip.hull > 0) {                        
                if (mySpaceShip.accuracy >= Math.random()) {
                    mySpaceShip.strike(aliensFirstShip)
                    console.log("You have been hit!");
                    windows.alert("Current number of enemies: " + aliensFirstShip +  "; Your health: " 
                    + mySpaceShip.hull + "");

                    // Your hull is gone and you have died.

            } else {
                
                windows.alert("You have lost! Refresh the browser to play again");
            }
            console.log(aliensFirstShip)
            //if aliensFirstShip still alive
            if (aliensFirstShip.hull > 0) {     
                aliensFirstShip.strike(mySpaceShip)    
                // The current enemy ship has died at this point.
            } else {
                aliensFirstShip.shift()
                if(aliensFirstShip== 0) {
                    windows.alert("You have defeated the enemy. Refresh the browser to play again");
                }
                // Because the ship has died, you will check to see if the player
                // want to continue or to retreat
                let response = prompt("Would you like to attack or retreat?", "attack/retreat")
                if(response === "attack") {
                    // This will cause the loop to continue running and now
                    // it will start from the beginning again
                    continue;
                } 
                
                else {
                    alert("You retreated. Refresh the browser to play again");
                    // This will end the while loop break;
                }
            }
        }
    }
}

