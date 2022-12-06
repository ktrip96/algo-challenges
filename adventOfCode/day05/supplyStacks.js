// --- Day 4: Camp Cleanup ---

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day05/input.txt',
    'utf8'
  )

  let stackArray = []
  const gameArray = data.split('\n')

  // fill the stack array with empty stacks (empty arrays)
  let stackIndex = 0
  for (let i = 0; i < gameArray.length; i++) {
    if (gameArray[i].length === 0) {
      stackIndex = i - 1
      break
    }
  }

  stackArray = new Array(gameArray[stackIndex].replaceAll(' ', '').length).fill(
    []
  )

  // console.log({ stackArray })
  // fill in each stacks

  for (let i = stackIndex - 1; i >= 0; i--) {
    for (let j = 0; j < gameArray[i].length; j++) {
      if (
        gameArray[i][j] !== '[' &&
        gameArray[i][j] !== ']' &&
        gameArray[i][j] !== ' '
      ) {
        stackArray[Math.floor(j / 4)] = stackArray[Math.floor(j / 4)].concat([
          gameArray[i][j],
        ])
      }
    }
  }

  // implement the moves
  const moveArray = gameArray
    .filter((i, index) => index > stackIndex + 1)
    .map((i) =>
      i
        .replace('move', '')
        .replace('from', '')
        .replace('to', '')
        .replaceAll(' ', '')
    )

  for (let i = 0; i < moveArray.length; i++) {
    const quantity = parseInt(moveArray[i][0])
    const from = parseInt(moveArray[i][1])
    const to = parseInt(moveArray[i][2])
    for (let j = 0; j < quantity; j++) {
      let elementToBeMoved = stackArray[from - 1].pop()
      stackArray[to - 1].push(elementToBeMoved)
    }
  }

  // render the result
  console.log({ stackArray })
  console.log(stackArray.map((i) => i.pop()))
} catch (err) {
  console.error(err)
}
