// You get an array of numbers, return the sum of all of the positives ones.

//given an array of numbers, always numbers, array is never empty, numbers are not integers
//return the sum of all the numbers as an integer

// function sumOfPositive(arr) {
//     const positiveNums = arr.filter(num => num > 0)
//     const sumOfNums = positiveNums.reduce((acc, c) => acc + c)
//     return sumOfNums
// }

//optimised 
function sumOfPositive(arr) {
    return arr.filter(nums => nums > 0).reduce((acc, c) => acc + c)
}

console.log(sumOfPositive([1, -4, 7, 12]), 20)
console.log(sumOfPositive([-1, 2, -3, 4, -5]), 6)
console.log(sumOfPositive([-10, -20, -30, 40, 50]), 90)