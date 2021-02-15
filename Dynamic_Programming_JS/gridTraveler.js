//  ** Grid Traveler Memoization ** 

const grid = (x, y, memo = {}) => {
    let key = x  + ',' + y
    if(x === 1 && y === 1) return 1
    if(x === 0 || y === 0 ) return 0
    if(key in memo) return memo[key]
    memo[key] = grid(x - 1, y, memo) + grid(x, y - 1, memo)
    return memo[key]
}

console.log(grid(1, 1))
console.log(grid(2, 3))
console.log(grid(3, 3))
console.log(grid(3, 2))
console.log(grid(18, 18))


// Time Complexity:     O(m * n), linear time
// Space Complexity:    O(n + m)