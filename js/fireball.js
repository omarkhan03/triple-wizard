// Import stuff as needed
// Initialize any necessary variables and exports
/* Initialize fireball position, power, direction, and source
   Position is the grid space being occupied by the fireball
   Power is the amount of grid spaces left for the fireball to travel (remaining range)
   Direction is the direction which the fireball is travelling in
   Source is the player whom the fireball belongs to
*/

// Handles the changing in position of the fireball based on it's position, power, and direction
// Add a case for edge detection
// Add a case for if it hits a worm (in which case you update the source player's score)
export function update() {
  // TODO
}

// Sets the x, y, and direction of a fireball when it is fired
export function createFireball(x, y, dirX, dirY) {
  // TODO
}

// Handles the drawing of the fireball on the grid
// The fireball should be drawn only if the power > 0
export function draw(gameBoard) {
  // TODO
}