# Wizards vs Worms

## Target platform: 
Desktop / Laptop computer

## Genre: 
Real-time action

## Objective: 
Kill 50 worms before your opponent does.

## Rules: 
There are no rules that are not already baked into the game mechanics, outside of common sense and courtesy (e.g. don't reach over to the other players controls). See game mechanics on how the game works.

## Game Mechanics
Wizards vs Worms is a real-time action game in the browser which implements a grid-based movement system and local multiplayer gameplay (2-players).

The players each control a wizard which can move around the grid with keyboard input (WASD for player 1, arrow keys for player 2). The players can attack (it's the "1" key for player 1 and the "O" key for player 2). The players can toggle their 'element' of choice (it's the "2" key for player 1 and the "P" key for player 2). 

The elements are fire, zap, and ice. Changing the selected element will change the type of attack. Fire is long range but has a slower reload time (it travels a large distance and you can't shoot another attack until it's gone). Zap has medium range and medium reload time. Ice has short range but high reload time.

The objective of the game is to kill worms as fast as possible. Worms spawn randomly on the grid in specific intervals. Worms move around randomly and they cannot harm the players. The number of worms that each player has killed are displayed in the UI's on each side of the gameboard. The first player to kill 50 worms wins the game.

## Note to marker
I have marked three features with their respective line numbers at the top of some JS files: Custom Animations on Worm.js, Ice.js, Fireball.js, and Zap.js. Custom Interaction Mechanism on Worm.js. Custom Algorithms on Ice.js, Fireball.js, and Zap.js.