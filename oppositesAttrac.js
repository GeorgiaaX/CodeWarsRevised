// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//given two number paramenters for the number of petals of each flower. 
//return a boolean value of true if one flower has an even number and the other has an odd number

function isTrueLove(flower1, flower2) {
    if((flower1 + flower2) % 2 !== 0) {
        return true
    } else {
        return false
    }
}

console.log(isTrueLove(3, 7), false)
console.log(isTrueLove(16, 9), true)
console.log(isTrueLove(4, 10), false)