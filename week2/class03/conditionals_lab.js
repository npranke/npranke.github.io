// CONDITIONALS LAB
// Using an if/else/else if structure, logical operators, and boolean logic, complete the function so that it prints the proper response for a given age input:

// 1) If you are under 16, you cannot do much outside of going to school
// 2) If you are 16 or older, you can drive
// 3) If you 18 or older, you can vote
// 4) If you are 21 or older, you can drink alcohol
// 5) If you are 25 or older, you can rent a car
// 6) If you are 35 or older, you can run for president
// 7) If you are 62 or older, you collect social security benefits

function whatCanYouDo (age) {
    // CODE HERE
    if (age < 16) {
        console.log('you can go to school! YES!')
    } else if (age >= 16 && age < 18) {
        console.log('you can drive!')
    } else if (age >= 18 && age < 21) {
        console.log('you can vote!')
    } else if (age >= 21 && age < 25) {
        console.log('you can drink alcohol!')
    } else if (age >= 25 && age < 35) {
        console.log('you can rent a car!')
    } else if (age >= 35 && age < 62) {
        console.log('you can run for president!')
    } else if (age >= 62) {
        console.log('you can collect social security benefits!')
    }
}

function prettyPrintAge(age) {
    console.log("at " + age + ", ")
}

// Change this variable's value to generate different responses from the whatCanYouDo function
let age = 28

let schoolAge = 15
let drivingAge = 17
let votingAge = 18
let drinkingAlcoholAge = 21
let carRentingAge = 27
let runningForPresidentAge = 40
let collectingSocialSecurityAge = 90

// We haven't seen this yet, but this is how we call (or, invoke) a function
prettyPrintAge(age)
whatCanYouDo(age)
console.log("")

prettyPrintAge(schoolAge)
whatCanYouDo(schoolAge)
console.log("")

prettyPrintAge(drivingAge)
whatCanYouDo(drivingAge)
console.log("")

prettyPrintAge(votingAge)
whatCanYouDo(votingAge)
console.log("")

prettyPrintAge(drinkingAlcoholAge)
whatCanYouDo(drinkingAlcoholAge)
console.log("")

prettyPrintAge(carRentingAge)
whatCanYouDo(carRentingAge)
console.log("")

prettyPrintAge(runningForPresidentAge)
whatCanYouDo(runningForPresidentAge)
console.log("")

prettyPrintAge(collectingSocialSecurityAge)
whatCanYouDo(collectingSocialSecurityAge)
console.log("")

// Remember to use node to run this script > node conditionals_lab.js
