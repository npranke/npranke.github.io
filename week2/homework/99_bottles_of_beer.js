// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

// simpler version:
// for (let bottlesOfBeer = 99; bottlesOfBeer >= 0; bottlesOfBeer--) {
//     let wordForBottle = "bottle"
//     if (bottlesOfBeer !== 1) {
//         wordForBottle += "s"
//     }
//     console.log(bottlesOfBeer + " " + wordForBottle + " of beer on the wall!")
// }

console.log("")

for (let i = 99; i >= 0; i--) {
    let numBottles = i > 0 ? i : "no more"
    let numBottlesDecremented = i > 1 ? i - 1 : "no more"

    let wordForBottle = i === 1 ? "bottle" : "bottles"
    let wordForBottleDecremented = i === 2 ? "bottle" : "bottles"

    let firstLine, secondLine
    if (i > 0) {
        firstLine = numBottles.toString().concat(
            " ",
            wordForBottle,
            " of beer on the wall, ",
            numBottles,
            " ",
            wordForBottle,
            " of beer."
        )
        secondLine = "Take one down, pass it around, ".concat(
            numBottlesDecremented,
            " ",
            wordForBottleDecremented,
            " of beer on the wall..."
        )
    } else if (i === 0) {
        firstLine = numBottles[0].toUpperCase().concat(
            numBottles.substr(1),
            " ",
            wordForBottle,
            " of beer on the wall, ",
            numBottles,
            " ",
            wordForBottle,
            " of beer."
        )
        secondLine = "Go to the store, buy some more, 99 bottles of beer on the wall..."
    }

    console.log(firstLine)
    console.log(secondLine)
    console.log("")
}
