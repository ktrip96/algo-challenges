// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Solution 1
// Very slow

const minCostClimbingStairs = (cost, i = -1) => {
  if (i >= cost.length) return 0
  if (i == -1) cost[i] = 0

  return Math.min(
    cost[i] + minCostClimbingStairs(cost, i + 1),
    cost[i] + minCostClimbingStairs(cost, i + 2)
  )
}

// console.log(minCostClimbingStairs([10, 15, 20]))
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

// Solution 2
// Linear
const minCostClimbingStairsV2 = (cost) => {
  let sum_right = 0
  let sum_left = 0

  for (let i = 0; i < cost.length; i++) {
    if (i === cost.length - 1) continue
    if (cost[i] === cost[i + 1]) {
      sum_right += cost[i]
      i++
    } else if (cost[i] < cost[i + 1]) {
      sum_right += cost[i]
    } else {
      sum_right += cost[i + 1]
      i++
    }
  }

  for (let i = cost.length - 1; i >= 0; i--) {
    if (i - 1 >= 0) {
      if (cost[i] === cost[i - 1]) {
        sum_left += cost[i]
        i--
      } else if (cost[i - 1] < cost[i]) {
        sum_left += cost[i - 1]
        i--
      } else {
        sum_left += cost[i]
      }
    }
  }

  return Math.min(sum_right, sum_left)
}

console.log(minCostClimbingStairs([0, 2, 3, 2]))
