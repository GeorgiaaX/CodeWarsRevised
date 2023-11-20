// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//given a number, always a number, always positive, can be 0
//return an array of this number, in reversed order

function reversedNumbers(num){
    let numStr = num.toString()
    let reverseArr = numStr.split("").reverse().map((n) => parseInt(n))
    return reverseArr
}

console.log(reversedNumbers(123456), [6, 5, 4, 3, 2, 1])
console.log(reversedNumbers(72), [2, 7])
console.log(reversedNumbers(853), [3, 5, 8])
