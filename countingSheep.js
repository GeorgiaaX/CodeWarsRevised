//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//given an array,
//if the array index is sheep, value is equal to true, return an integer with the amount of sheep


function isSheep(array) {
    return array.filter((x) => x === true).length
}


console.log(isSheep([true, false, true, true]), 3)
console.log(isSheep([]), 0)
console.log(isSheep([false, true, true, false, false]), 2)
