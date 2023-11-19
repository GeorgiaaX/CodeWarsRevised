//We need a function that can transform a string into a number. What ways of achieving this do you know?

//always a string, never empty, always contains a numeric value, can be negative
//return a number

function strToNum (str) {
    return Number(str)
}

console.log(strToNum("1234"), 1234)
console.log(strToNum("10863"), 10863)
console.log(strToNum("-7"), -7)