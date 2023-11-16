// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//give an integer, always a number, never negative, given it as a value of time. 
//return the amount of litres drunk, as an integer rounded to the smallest value

function litresDrunk(time) {
    return Math.floor(time * 0.5)
}

console.log(litresDrunk(3), 1)
console.log(litresDrunk(6.7), 3)
console.log(litresDrunk(11.8), 5)