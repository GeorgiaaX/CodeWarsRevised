// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//given a boolean value of true or false, always a boolean
//return a string of yes for true and a no for false

// function boolToWord(bool){
//     if(bool === true) {
//         return "Yes"
//     } else {
//         return "No"
//     }
// }

//optimised
function boolToWord {
    return bool ? "Yes" : "No"
}

console.log(boolToWord(true), "yes")
console.log(boolToWord(false), "no")