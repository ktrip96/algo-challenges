// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

const tribonacci = (n, memo = {}) => {
  if (n === 0 || n === 1) return n
  if (n === 2) return 1

  if (n in memo) return memo[n]

  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo)

  return memo[n]
}

console.log(tribonacci(4))
console.log(tribonacci(25))
