// --- Day 3: Rucksack Reorganization ---

// --- Day 2: Rock Paper Scissors ---
// 1 --- Rock (A)
// 2 --- Paper (B)
// 3 --- Scissors (C)
// Y --- draw
// X --- loose
// Z --- win
// 0 --- Loosing
// 3 --- Draw
// 6 --- Winning

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day03/input.txt',
    'utf8'
  )

  // 'a'.charCodeAt(0)
  // 97
  // 'A'.charCodeAt(0)
  // 65
  const priority = (character) => {
    console.log({ character })
    // a - z ==> 1 - 26
    // A - Z ==> 27 - 62

    // if you are lowercase
    if (character === character.toLowerCase())
      return character.charCodeAt(0) - 96
    // else
    return character.charCodeAt(0) - 38
  }

  const calculatePoints = (array) => {
    const firstLetterHash = {}
    const secondLetterHash = {}
    const firstString = array[0]
    const secondString = array[1]
    const thirdString = array[2]

    let commonChar = ''
    for (let i = 0; i < firstString.length; i++) {
      const char = firstString[i]
      firstLetterHash[char] = true
    }
    for (let i = 0; i < secondString.length; i++) {
      const char = secondString[i]
      secondLetterHash[char] = true
    }
    for (let i = 0; i < thirdString.length; i++) {
      const char = thirdString[i]
      if (firstLetterHash[char] && secondLetterHash[char])
        commonChar = thirdString[i]
    }

    return priority(commonChar)
  }

  const gameArray = data.split('\n').map((l) => l.split(','))
  let finalGameArray = []
  let i = 0
  let tempArray = []
  while (i + 2 <= gameArray.length) {
    tempArray = gameArray[i].concat(gameArray[i + 1]).concat(gameArray[i + 2])
    finalGameArray.push(tempArray)
    tempArray = []
    i = i + 3
  }

  const result = finalGameArray
    .map((l) => calculatePoints(l))
    .reduce((a, b) => a + b)
  console.log(result)
  // .map((line) => calculatePoints(line))
  // .reduce((a, b) => a + b)
} catch (err) {
  console.error(err)
}
