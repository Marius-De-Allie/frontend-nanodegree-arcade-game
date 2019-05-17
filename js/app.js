// Enemies our player must avoid
function Enemy(x, y, speed) { //Enemy constructor function declaration
    this.x = x;
    this.y = y + 55;
    this.sprite = 'images/enemy-bug.png';
    this.enemySpeed = speed;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) { //Enemy update prototype method
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.

      if(this.x < 505) { //Check if Enemy x coordinate is within game boundaries
        this.x += this.enemySpeed * dt; //update enemy x coordinate
      }
      else {
        this.x = -1; //if x coordinate is outside boundary then set enemy just
        // slightly offscreen to the left
      }
  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

// Hero class
class Hero {
  constructor() {
    this.x = 202;
    this.y = 387;
    this.sprite = 'images/char-boy.png';
    this.win = false;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  /* Function to handle player keyboard inputs and update player x and y
  property values based keyboard input recieved */
  handleInput(input) {
    if (input === 'left' && this.x > 0) { //check player is within left boundary
      this.x -= 101;
    }
    else if (input === 'up' && this.y > 0) { //check player is within upper
      this.y -= 83;                           //boundary
    }
    else if (input === 'right' && this.x < 404) { //check player is within right
      this.x += 101;                              //boundary
    }
    else if (input === 'down' && this.y < 387) { //check player is within lower
      this.y += 83;                             //boundary
    }
  }

  // Function to reset player x and y coordinates to starting position on board.
  reset() {
    this.x = 202;
    this.y = 387;
  }

  // Function to detect player and enemy object collisions
  update() {
    for(let currentEnemy of allEnemies) { // loop through enemies array
      // compare each enemy in array xy coordinates to player xy coordinates
      if (this.y === currentEnemy.y && (currentEnemy.x + 50.5 > this.x &&
        currentEnemy.x < this.x + 50.5)) {
          this.reset(); // call reset method on player if collision occurs
        }
    }
    if(this.y === -28) { // check player's y coordinate for game win condition
      this.win = true; // set player win property value to true
    }
  }
}

// Place the player object in a variable called player

const player = new Hero(); // Instantiate Hero your object
let allEnemies = []; // Declare empty array to hold enemy objects
// Instantiate enemy objects with x, y and speed arguments passed into constructor
const enemy1= new Enemy(-1, 83, 200);
const enemy2= new Enemy(-505, 0, 250);
const enemy3= new Enemy(-303, 166, 200);
const enemy4= new Enemy(-808, 0, 250);
// Append enemy objects to allEnemies array
allEnemies.push(enemy1, enemy2, enemy3, enemy4);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    /* Call handleInput method on player object passing in keypresses from event
    Listener */
    player.handleInput(allowedKeys[e.keyCode]);
});
