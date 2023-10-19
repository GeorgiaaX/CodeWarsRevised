// Complete the solution so that it reverses the string passed into it.

//reveive a string, string is never empty, all lower case

//return the string reversed as a string

function reverseStr(str) {
    return str.split("").reverse().join("")
}

// console.log(reverseStr("world"), "dlrow")
// console.log(reverseStr("hello"), "olleh")
// console.log(reverseStr("mouse"), "esuom")