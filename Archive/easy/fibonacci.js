// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n)

const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n

  if (n in memo) return memo[n]

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

  return memo[n]
}

// fib(2)
console.log(fib(6))
console.log(fib(8))
console.log(fib(50))
