/** Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
 *
 * The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
 *
 * If there is a tie for the shortest combination, you may return any one of the shortest
 */

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (targetSum in memo) return memo[targetSum]

  let shortestArray = null

  for (let n of numbers) {
    const remainder = targetSum - n
    memo[targetSum] = bestSum(remainder, numbers, memo)
    if (memo[targetSum] !== null) {
      const array = [...memo[targetSum], n]
      if (shortestArray === null || array.length < shortestArray.length) {
        shortestArray = array
      }
    }
  }

  memo[targetSum] = shortestArray
  return shortestArray
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3,5]
console.log(bestSum(8, [1, 4, 5])) // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25,25,25,25]
