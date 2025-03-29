/**Write a function canSum(targetSum, nubmers) that takes in
 * a targetSum and an array of numbers as arguments
 *
 * The funciton should return a boolean indicating whether or not it
 * is possible to generate the targetSum using numbers from the array
 */

const canSum = (target, numbers, memo = {}) => {
  if (target === 0) return true
  if (target < 0) return false
  if (target in memo) return memo[target]

  for (let n of numbers) {
    const remainder = target - n
    memo[remainder] = canSum(remainder, numbers, memo)
    if (memo[remainder] === true) return true
  }
  return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
