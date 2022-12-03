// --- Day 1: Calorie Counting ---

const fs = require('fs')

try {
  const data = fs.readFileSync(
    '/home/ktrip96/Algorithms/adventOfCode/day01/input.txt',
    'utf8'
  )

  const arrayData = data.split('\n')
  let max = 0
  let tempCounter = 0
  const totalSnackArray = []
  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i] === '') {
      totalSnackArray.push(tempCounter)
      tempCounter = 0
    } else {
      tempCounter = tempCounter + parseInt(arrayData[i])
    }
  }

  totalSnackArray.push(tempCounter)
  totalSnackArray.sort((a, b) => b - a)

  console.log(totalSnackArray[0] + totalSnackArray[1] + totalSnackArray[2])
} catch (err) {
  console.error(err)
}
