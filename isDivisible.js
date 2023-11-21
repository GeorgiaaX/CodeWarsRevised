// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

//given three numbers, all positive, none are negative, all above 0. always numbers
//return a boolean. true means that it is divisible, false means that its not divisible.

function isDivisible (n, x, y) {
    if(n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(2, 4, 6), true)
console.log(isDivisible(3, 15, 30), true)
console.log(isDivisible(7, 84, 102, 327), false)