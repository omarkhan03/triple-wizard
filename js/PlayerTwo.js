// Import stuff as needed
// Initialize any necessary variables and exports

// Handle inputs for player 2
// Arrow keys to move, O to shoot, P to toggle element
window.addEventListener('keydown', e=> {
  // TODO
})

// Handle an attack event, with the direction of attack given as input
// If fire, then it should call the createFireball function from fireball.js
// If zap, then it should call the createZap function from zap.js
// If ice, then it should call the createIce function from ice.js
// Pass the direction of attack into the above functions too
export function attack(direction) {
  // TODO
}

// Handle the drawing of player 2 on the grid
// This should create a div, assign x and y values, then append to gameboard
export function draw(gameBoard) {
  // TODO
}

// Return true if the given grid position is the same as the wizard's position
export function onWizard(position) {
  // TODO
}

// Return the position of the wizard
export function getWizardPos() {
  // return wizardBody
}

// Return true if the wizard runs into a wall
export function checkWall() {
  // TODO
}