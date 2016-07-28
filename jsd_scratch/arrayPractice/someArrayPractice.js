// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.prototype.forEach()
// returns undefined
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var boroughs = [
//     'manhattan',
//     'the bronx',
//     'queens',
//     'brooklyn',
//     'staten island'
// ]

// boroughs.forEach(function(borough) {
//     console.log(borough)
// })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.prototype.every()
// returns boolean
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var evens = []
// evens.push(2, 4, 6, 8, 10)
// var odds = []
// odds.push(1, 3, 5, 7, 9)

// var every1 = evens.every(function(num) {
//     return num % 2 === 0
// })
// var every2 = evens.every(function(num) {
//     return num % 4 === 0
// })

// console.log(every1)
// console.log(every2)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.prototype.some()
// returns boolean
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var evens = []
// evens.push(2, 4, 6, 8, 10)
// var odds = []
// odds.push(1, 3, 5, 7, 9)

// var some1 = evens.some(function(num) {
//     return num % 2 === 0
// })
// var some2 = evens.some(function(num) {
//     return num % 4 === 0
// })

// console.log(some1)
// console.log(some2)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.prototype.filter()
// returns a new array object
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var evens = []
// evens.push(2, 4, 6, 8, 10)
// var odds = []
// odds.push(1, 3, 5, 7, 9)

// isGreaterThanFive = function(num) {
//     return num > 5
// }

// var largeNums1 = evens.filter(isGreaterThanFive)
// var largeNums2 = odds.filter(isGreaterThanFive)

// console.log(largeNums1);
// console.log(largeNums2);
// console.log(evens);
// console.log(odds);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.prototype.map()
// returns a new array object
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var evens = []
evens.push(2, 4, 6, 8, 10)
var odds = []
odds.push(1, 3, 5, 7, 9)

addFive = function(num) {
    return num + 5
}

var biggerNums1 = evens.map(addFive)
var biggerNums2 = odds.map(addFive)

console.log(biggerNums1);
console.log(biggerNums2);
console.log(evens);
console.log(odds);
