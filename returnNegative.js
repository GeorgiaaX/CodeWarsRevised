//you are given a number and have to make it negative. But maybe the number is already negative?

//numbers only, numbers can be either postive or negative or 0
//return a negative number if number is postive or negative, return 0 for 0

// function returnNegative(num)  {
//     if(num > 0) {
//         return num * -1
//     } else {
//         return num
//     }
// }

//optimised
function returnNegative(num) {
    return num > 0 ? -num : num
}

console.log(returnNegative(5), -5)
console.log(returnNegative(0), 0)
console.log(returnNegative(-7), -7)