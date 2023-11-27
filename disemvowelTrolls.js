//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".Note: for this kata y isn't considered a vowel.

//given a string, always a string, never empty, upper and lower case values, special characters 
//return a string with the vowels removed

function noVowels(str) {
    //replace
    return str.replace(/[aeiou]/gi, '')
}

console.log(noVowels("Hello World!"), "Hll Wrld!" )
console.log(noVowels("Rainy day weather"), "Rny dy Wthr" )
console.log(noVowels("Can I order a pizza please?"), "Cn rdr pzz pls?" )



///[aeiou]/gi: This is a regular expression pattern that defines the characters to be searched for and replaced. Let's break down the components of this pattern:
//[aeiouAEIOU]: This part of the pattern is a character class that matches any single character that is a vowel. The characters within square brackets represent the set of characters to match. In this case, it matches both lowercase and uppercase vowels (a, e, i, o, u, A, E, I, O, U).
//g: This flag indicates that the replacement should be done globally, meaning that it will replace all occurrences of the matched pattern in the entire string, not just the first one.
//i: This flag makes the matching case-insensitive, so it will match both lowercase and uppercase vowels.