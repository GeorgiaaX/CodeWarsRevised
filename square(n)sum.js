//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//given an array of numbers, always numbers, never empty
//return a number that is the sum of all elements in the array individually squared


function sumOfSquares (array) {
    //map and reduce
    return array.map((x) => x * x).reduce((acc, c) => acc + c)
}

console.log(sumOfSquares([0, 1, 2, 2]), 9)
console.log(sumOfSquares([2, 2, 2]), 12)
console.log(sumOfSquares([5, 5, 5, 5]), 100)

