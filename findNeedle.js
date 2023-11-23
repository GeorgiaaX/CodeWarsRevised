// Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

//given an array that contains a series of strings with only one "needle", always an array of strings, always cotnains the word needle
//return the phrase "found the needle at position" with the index of the needle

function findNeedle(arr) {
    let index = arr.findIndex((e) => e === "needle")
    return `Found the needle at position ${index}`
}

console.log(findNeedle(["x", "x", "x", "x", "needle"]), "found the needle at position 4")
console.log(findNeedle(["x", "x", "x", "x", "x", "x", "x", "x", "needle"]), "found the needle at position 8")
console.log(findNeedle(["needle", "x", "x", "x"]), "found the needle at position 0")