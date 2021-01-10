const howSum = (targetSum, array, memo = {}) => {
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    if(targetSum in memo) return memo[targetSum]

    for(let n of array){
        let remainder = targetSum - n
        let remainderResult = howSum(remainder, array, memo)
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult, n]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null

}


console.log(howSum(7, [2,3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 3, 5]))
console.log(howSum(300, [7, 15]))