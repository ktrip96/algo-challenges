// ** Fibonacci Memoization ** 

const fib = (n, memo = []) => {
    if(memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(3))
console.log(fib(5))
console.log(fib(8))
console.log(fib(50))

// Complexity: O(2n) --> Linear
// O(n) --> space



