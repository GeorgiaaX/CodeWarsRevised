// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces.

//given a string, only ever a string, will also consist of only lower case letters, can contain spaces
//return a number of the amount of vowels in the string

function getVowels(str) {
    //split.filter.length
    let count = str.split("").filter(letter => "aeiou".includes(letter))
    return count.length
}

console.log(getVowels('hello world'), 3)
console.log(getVowels('banana bread'), 5)
console.log(getVowels('race car'), 3)