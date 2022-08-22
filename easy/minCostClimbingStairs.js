// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

const minCostClimbingStairs = (cost, i = 0) => {
  return Math.min(
    minCostClimbingStairs(cost, i + 2) + cost[i],
    minCostClimbingStairs(cost, i + 2) + cost[i + 1]
  )
}

console.log(minCostClimbingStairs([10, 15, 20]))
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
