const fib =  (num, memo = []) => {
    if(num <= 2 ) return 1
    if(memo[num] !== undefined) return memo[num]
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
    return memo[num]
}


console.log(fib(2))
console.log(fib(5))
console.log(fib(58))