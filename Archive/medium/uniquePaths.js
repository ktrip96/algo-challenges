// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

const uniquePaths = (m, n, memo = {}) => {
  if (n === 1 || m === 1) return 1

  let key = m + ',' + n
  if (key in memo) return memo[key]

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)

  return memo[key]
}

console.log(uniquePaths(18, 18))
