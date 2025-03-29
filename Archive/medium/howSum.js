/**Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
 *
 * The function should return an array containing any combination of elements that add up to exactly the targetSum.
 * If there is no combination that adds up to the targetSum, then return null.
 */

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (targetSum in memo) return memo[targetSum]

  for (let n of numbers) {
    const remainder = targetSum - n
    memo[targetSum] = howSum(remainder, numbers, memo)
    if (memo[targetSum] !== null) return [...memo[targetSum], n]
  }
  return null
}

console.log(howSum(7, [2, 3])) // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])) // [4,3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2,2,2,2]
console.log(howSum(300, [7, 14])) // null
