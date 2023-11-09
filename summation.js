//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//given a number, always greater than 0
//return the summation of that number

function summation(n) {
   return n * (n+1)/2;
}

console.log(summation(10), 55)
console.log(summation(45), 1035)
console.log(summation(67), 2278)