const fib = (n) => {
  if (n == 0) return 0
  if (n == 1) return 1
  else return fib(n - 1) + fib(n - 2)
}

const fibV2 = (n, memo = {}) => {
  if (n == 0) return 0
  if (n == 1) return 1
  if (n in memo) return memo[n]
  else {
    memo[n] = fibV2(n - 1, memo) + fibV2(n - 2, memo)
    return memo[n]
  }
}

const test = (fun) => {
  for (let i = 40; i < 43; i++) {
    console.log('Input: ', i, ' output: ', fun(i))
  }
}

test(fib)
console.log('Memoization Solution:')
test(fibV2)
