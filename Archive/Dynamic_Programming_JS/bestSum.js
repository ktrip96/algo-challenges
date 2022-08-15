// *** Best Sum ***

const bestSum = (targetSum, array, memo = {}) => {
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    if(targetSum in memo) return memo[targetSum]
    let min = 100
    let finalResult = null


    for(let n of array){
        let remainder = targetSum - n
        let remainderResult = bestSum(remainder, array, memo)
        if(remainderResult !==  null){
            if(remainderResult.length < min){
                min = remainderResult.length
                finalResult = [...remainderResult, n]
            }
        }
    }
    memo[targetSum] = finalResult

    if(min === 100) return null
    else return finalResult
}

console.log(bestSum(7, [2,3]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(7, [2, 3, 5]))
console.log(bestSum(300, [7, 15]))