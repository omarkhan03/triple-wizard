let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e=> {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y:-1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y:1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y:0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y:0 }
      break

    // case 'w':
    //   if (lastP2Direction.y !== 0) break
    //   P2Direction = { x: 0, y:-1 }
    //   break
    // case 's':
    //   if (lastP2Direction.y !== 0) break
    //   P2Direction = { x: 0, y:1 }
    //   break
    // case 'a':
    //   if (lastP2Direction.x !== 0) break
    //   P2Direction = { x: -1, y:0 }
    //   break
    // case 'd':
    //   if (lastP2Direction.x !== 0) break
    //   P2Direction = { x: 1, y:0 }
    //   break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  
  return inputDirection
}

export function getP2Direction() {
  // lastP2Direction = P2Direction
  // return P2Direction
}