/** canConstruct **/

const canConstruct = (stringTarget, array, memo = {}) => {
    if(stringTarget === "") return true
    if(stringTarget === -1) return false
    if(stringTarget in memo) return memo[stringTarget]

    for(let word of array){
        let t = stringTarget.indexOf(word)
        let remainder
        if (t === 0) remainder = stringTarget.slice(word.length)
        else  remainder = -1
        
        if(canConstruct(remainder, array, memo) === true){
            memo[stringTarget] = true
            return true
        }
    }

    memo[stringTarget] = false
    return false
}

console.log(canConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter","ot", "o", "t" ]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeee", "eeeeeee"]))