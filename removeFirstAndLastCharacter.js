// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//give a string, always a string, three or more charactes in the string, never empty
//return a string with the first and last characters removed from the original string

// function removeFirstAndLast (str) {
//     let array = str.split("")
//     array.shift()
//     array.pop()
//     return array.join("")
// }

//optimised

function removeFirstAndLast(str) {
    return str.slice(1, -1)
}

console.log(removeFirstAndLast("hello"), "ell")
console.log(removeFirstAndLast("Halloween"), "allowee")
console.log(removeFirstAndLast("Merry Christmas"), "erry Christma")