// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//takes an integer, no floating numbers, always a number, 0 

//returns even and odd value as a string

// function EvenOrOdd(num) {
//     if(num % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

//Opptimised
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}


console.log(EvenOrOdd(2), "Even")
console.log(EvenOrOdd(0), "Even")
console.log(EvenOrOdd(7), "Odd")
console.log(EvenOrOdd(988), "Even")

