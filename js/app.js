class Hero {
  constructor() {
    this.x = 202;
    this.y = 415;
    this.sprite = 'images/char-boy.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(input) {
    if (input === 'left' && this.x > 0) {
      this.x -= 101;
    }
    else if (input === 'up' && this.y > 83) {
      this.y -= 83;
    }
    else if (input === 'right' && this.x < 404) {
      this.x += 101;
    }
    else if (input === 'down' && this.y < 415) {
      this.y += 83;
    }
  }
}

// Enemies our player must avoid
class Enemy {
  Constructor() {
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
  };

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Hero();
let allEnemies = [];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
