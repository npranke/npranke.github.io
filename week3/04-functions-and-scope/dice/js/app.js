/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* The following should be contained inside a function, rollDice
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the class for the first die element, and store to a variable firstDie (hint: recall string concatenation)
* combine 'dice-' and random1 to form the class for the second die element, and store to a variable secondDie (hint: recall string concatenation)
* apply firstDie and secondDie to their respective HTML elements using the .className attribute (hint: use document.getElementById)
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint: document.getElementById)

3) Attach an onclick event handler to the the element 'roll-dice' - when this button is clicked, it should trigger the above rollDice function

*/

let rollDiceButton = document.getElementById("roll-dice")
rollDiceButton.onclick = rollDice

let firstDieElement = document.getElementById("first-die")
let secondDieElement = document.getElementById("second-die")

let possibleNumClasses = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]

function getDieNumClass(dieElement) {
    for (let i = 0; i < possibleNumClasses.length; i++) {
        let numClass = possibleNumClasses[i]
        if (dieElement.classList.contains(numClass)) {
            return numClass
        }
    }
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
    // record starting die classes
    let firstDieNumClass = getDieNumClass(firstDieElement)
    let secondDieNumClass = getDieNumClass(secondDieElement)

    // generate new dice and their cooresponding classes
    let random1 = getRandomIntInclusive(1, 6)
    let random2 = getRandomIntInclusive(1, 6)
    let firstDie = "dice-" + random1
    let secondDie = "dice-" + random2

    // remove the old die number classes
    firstDieElement.classList.remove(firstDieNumClass)
    secondDieElement.classList.remove(secondDieNumClass)

    // add the new die number classes
    firstDieElement.classList.add(firstDie)
    secondDieElement.classList.add(secondDie)
}
