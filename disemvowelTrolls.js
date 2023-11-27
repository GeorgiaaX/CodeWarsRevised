//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".Note: for this kata y isn't considered a vowel.

//given a string, always a string, never empty, upper and lower case values, special characters 
//return a string with the vowels removed

function noVowels(str) {
    //split.filter.join
    return str.replace(/[aeiouAEIOU]/gi, '')
}

console.log(noVowels("Hello World!"), "Hll Wrld!" )
console.log(noVowels("Rainy day weather"), "Rny dy Wthr" )
console.log(noVowels("Can I order a pizza please?"), "Cn rdr pzz pls?" )

