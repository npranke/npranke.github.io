var prompt = require('prompt');
var { getRandomInt, clockStyleMod } = require('../../../utils/helpers.js');

// make the choices a global
// the order is important for the game's arithmetic:
//     rock < paper < scissors < (rock)
//     0 < 1 < 2 < (3 % 3)
//     CHOICES[0] < CHOICES[1] < CHOICES[2] < CHOICES[3 % 3]
const CHOICES = ["rock", "paper", "scissors"]

// initializes game; prompts user for rock, paper, or scissors input
function init () {
    prompt.get('choice', function (err, result) {
        var choice = result.choice;

        // error handling - will run prompt again if user does not enter rock, paper, or scissors
        if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') return init();

        // triggers game
        startGame(choice)
    });
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
    // var cpuChoice;
    // for (let i = 0; i < 100; i++) {
    //  cpuChoice = generateCPUChoice();
    // }
    var cpuChoice = generateCPUChoice();
    var winner = pythonicCompare(userChoice, cpuChoice);
    console.log(winner + ' is the winner!');
    console.log("");
}

// YOUR CODE BELOW!

// 1. The function generateCPUChoice should randomly generate and return one of the following values: 'rock', 'paper', or 'scissors'
// Start by creating an array containing: ['rock', 'paper', 'scissors']
// Then, randomly generate a whole number between 0 and 2
// Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
// Ensure you return this value!
function generateCPUChoice () {
    let randomInt = getRandomInt(0, 3)
    let cpuChoice = CHOICES[randomInt]
    console.log("The CPU's choice is: " + cpuChoice)
    return cpuChoice
}

// 2. The function compare takes two strings (userChoice and cpuChoice) that represent the user's and cpu's respective choices: 'rock', 'paper', or 'scissors'
// This function should compare the two choices, and return a winner
// For example, if userChoice === 'rock' and cpuChoice === 'scissors', then 'user' should be returned
// Hint: use if/else/ele if logic to compare the values and return a winner
function compare(userChoice, cpuChoice) {
    let userNum = CHOICES.indexOf(userChoice)
    let cpuNum = CHOICES.indexOf(cpuChoice)
    let choiceDiff = userNum - cpuNum

    if (choiceDiff === 0) {
        return "It's a tie! Everybody"
    } else if (choiceDiff === -2 || choiceDiff === 1) {
        return "You! The user"
    } else if (choiceDiff === -1 || choiceDiff === 2) {
        return "Oh my, the CPU"
    }
}

function pythonicCompare(userChoice, cpuChoice) {
    let userNum = CHOICES.indexOf(userChoice)
    let cpuNum = CHOICES.indexOf(cpuChoice)
    let choiceDiff = userNum - cpuNum

    if (choiceDiff === 0) {
        return "It's a tie! Everybody"
    } else if (clockStyleMod(choiceDiff, 3) === 1) {
        return "You! The user"
    } else if (clockStyleMod(choiceDiff, 3) === 2) {
        return "Oh my, the CPU"
    }
}
