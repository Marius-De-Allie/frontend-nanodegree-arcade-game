# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

### How to run Game
- Game may be downloaded from [my GitHub repository](https://github.com/spectre4300s/frontend-nanodegree-arcade-game)
- Once downloaded, ensure compressed file is extracted to one folder.
- Extracted folder should contain:
 1. an `images` folder, containing all in game images.
 2. a `css` folder, containing game's stylesheet.
 3. a `js` folder, containing 3 **JavaScript** files that provides game functionality/interactivity.
 4. an `index.html` file, which provides the page structure and content.
 5. a `README.md` file, which provides instructions on how to launch and play the game.
- Within game folder open `index.html` file in your web browser to load game engine

### Gameplay Instructions
- When the game begins, your player character is at the bottom center of the game board _(grass area)_.
- There are enemy characters _(bugs)_ moving horizontally across the game board from left edge to right edge.
- Your objective is to reach the top _(water)_ area of the game board with your player character, moving vertically while avoiding collisions with the enemy _(bug)_ objects as they go horizontally across the game board.
- You win the game by navigating your player character to anyone of the 5 upper most _(stone)_ tiles just below the water without colliding with any of the enemy _(bug)_ objects.
- If your player character collides with any enemy (bug) object the game _resets_ and your character is placed back at the bottom center of game board to try once more.
- You control your player character via the arrow keys on your keyboard. **Left arrow** moves the character one block left _(horizontally)_ of current position.
**Right arrow** moves the character one block right _(horizontally)_ of current position.
**Up arrow** moves the character one block up _(vertically)_ from current position.
**Down arrow** moves the character one block down _(vertically)_ from current position.
- Once a winning condition has been met you will be presented with a message informing you of your win and giving you the option to _play again_.
- Upon winning, if you choose to _play again_, the game board with reset, moving your character back to the bottom center of the game board and allowing to try again.

**You cannot click on a tile to move your character to that tile, you must use the arrow keys on your keyboard to move your character on the game board!**

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
