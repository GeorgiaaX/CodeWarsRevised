//Write a function that removes the spaces from the string, then return the resultant string.

//Given a string with white spaces, always a string, never empty, always has spaces
//return a string without the spaces


function removeSpaces(str) {
    return str.replaceAll(" ", "")
}


console.log(removeSpaces("hello world"), "helloworld")
console.log(removeSpaces("a b c d"), "abcd")
console.log(removeSpaces("I am a turtle"), "Iamaturtle")