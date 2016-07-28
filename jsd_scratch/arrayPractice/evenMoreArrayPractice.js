var firstArray = ['cat', 'javascript', false, 25000, true, 'keanu', 25];
var secondArray = [[1,2,3], 'this is a two-dimensional array', 'weird, huh', 1991];

// Write a function, parseArray, that takes one parameter, array, and
// returns a new array containing only the strings from the original array
function parseArray(array) {
    return array.filter((value) => {
        if (typeof value === "string") {
            return value
        }
    })
}

function parseArrayWithReduce(array) {
    return array.reduce((previousValue, currentValue) => {
        if (typeof currentValue === "string") {
            previousValue.push(currentValue)
        }
        return previousValue
    }, [])
}

// check function
var firstParsedArray = parseArrayWithReduce(firstArray);
var secondParsedArray = parseArrayWithReduce(secondArray);

console.log(firstParsedArray);
// [ 'cat', 'javascript', 'keanu' ]

console.log(secondParsedArray);
// [ 'this is a two-dimensional array', 'weird, huh' ]
