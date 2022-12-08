// --- Day 4: Camp Cleanup ---

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day08/input.txt',
    'utf8'
  )

  const gameArray = data.split('\n')

  const isTopVisible = (data, i, j) => {
    let score = 0
    while (i > 0) {
      i = i - 1

      score++
      if (parseInt(gameArray[i][j]) >= data) break
    }

    return score
  }

  const isBottomVisible = (data, i, j) => {
    let score = 0
    while (i < gameArray.length - 1) {
      i = i + 1
      let arrayValue = parseInt(gameArray[i][j])
      score++
      if (arrayValue >= data) break
    }
    return score
  }

  const isRightVisible = (data, i, j) => {
    let score = 0
    while (j < gameArray[0].length - 1) {
      j++
      score++
      if (parseInt(gameArray[i][j]) >= data) break
    }
    return score
  }

  const isLeftVisible = (data, i, j) => {
    let score = 0
    while (j > 0) {
      j--

      score++
      if (parseInt(gameArray[i][j]) >= data) break
    }
    // console.log('left', data, si, sj)
    return score
  }

  const isVisible = (value, i, j) => {
    // console.log('Data:', value, ' Coordinates ', i, j, ' :')
    // console.log(
    //   'Score:',
    //   isTopVisible(value, i, j),
    //   isRightVisible(value, i, j),
    //   isLeftVisible(value, i, j),
    //   isBottomVisible(value, i, j)
    // )
    const total =
      isTopVisible(value, i, j) *
      isRightVisible(value, i, j) *
      isLeftVisible(value, i, j) *
      isBottomVisible(value, i, j)
    return total
  }

  const partOne = () => {
    let max = 0
    for (let i = 0; i < gameArray.length; i++) {
      for (let j = 0; j < gameArray[i].length; j++) {
        let score = isVisible(parseInt(gameArray[i][j]), i, j)
        if (max < score) max = score
      }
    }

    console.log(max)
  }

  partOne()
} catch (err) {
  console.error(err)
}
