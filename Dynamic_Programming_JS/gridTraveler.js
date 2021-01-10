
//  ** Grid Traveler Memoization ** 


const grid = (a, b, memo = {}) => {
    let key = a + ',' + b
    if (memo[key] !== undefined) return memo[key]
    if (a == 1 && b == 1) return 1
    if (a == 0 || b == 0) return 0
    memo[key] = grid(a - 1, b, memo) + grid(a, b - 1, memo)
    return memo[key]
}

console.log(grid(1, 1))
console.log(grid(2, 3))
console.log(grid(3, 3))
console.log(grid(3, 2))
console.log(grid(18, 18))
