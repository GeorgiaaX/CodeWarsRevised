//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


//given a string and a number. Always two parameters, a number and a string. string in never empty, number is never negative
//return a string that is repeated the number of times of the integer

function repeatStr(str, n) {
    let newStr = ""
    for( let i = 0; i < n; i++) {
        newStr += str
    }
    return newStr

}

// console.log(repeatStr("*", 3), "***")
// console.log(repeatStr("hello", 5), "hellohellohellohellohello")
// console.log(repeatStr("wild", 2), "wildwild")


