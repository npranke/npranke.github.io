// Use a for loop to iterate over the numbers array.
// If the number you are iteratring over is NOT present in the otherNumbers array, push the number into otherNumbers.
// For example, 0 and 1 are not present in otherNumbers, and should be pushed into it
// HINT: look up .indexOf() http://www.w3schools.com/jsref/jsref_indexof_array.asp

var numbers = [75, 47, 0, 1, 2, 3, 4, 53, 6, 7, 8, 9]
var otherNumbers = [2 ,3, 7, 9]

// Your code here (HINT: start with a for loop!)
// for (let i = 0; i < numbers.length; i++) {
//     let numberNum = numbers[i]
//     for (let j = 0; j <otherNumbers.length; j++) {
//         let otherNumberNum = otherNumbers[j]
//         if (numberNum === otherNumberNum) {
//             break
//         }
//         if (j === otherNumbers.length - 1) {
//             otherNumbers.push(numberNum)
//         }
//     }
// }

// another solution
// for (let i = 0; i < numbers.length; i++) {
//     let numberNum = numbers[i]
//     if (otherNumbers.indexOf(numberNum) === -1) {
//         otherNumbers.push(numberNum)
//     }
// }

// and another solution
for (let i = 0; i < numbers.length; i++) {
    numbers.sort()
    otherNumbers.sort()
    if (numbers[i] !== otherNumbers[i]) {
        otherNumbers.unshift(numbers[i])
    }
}

// This will sort the array
otherNumbers.sort()

// You should see: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(otherNumbers)
