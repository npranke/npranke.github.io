module.exports = function(robot) {

    function _getNoodleBotRegEx(list) {
        console.log("getting regex")
        return new RegExp(list.join("|"), "i")
    }

    let noodleList = [
        "rice",
        "egg",
        "instant",
        "spaghetti",
        "cup of",
        "soba",
        "udon",
        "zucchini",
        "ramen"
    ]

    let favNoodleQuestionList = [
        "what're your favorite noodles",
        "what's your favorite noodle"
    ]

    robot.hear(_getNoodleBotRegEx(noodleList), function(response) {
        return response.send("That's a noodle!")
    })

    robot.respond(_getNoodleBotRegEx(favNoodleQuestionList), function(response) {
        return response.send(
            "Hmm, right now, I'd say " + response.random(noodleList) + " noodles!"
        )
    })

    robot.respond(/my name is (.*)|i'm (.*)/i, function(response) {
        let name
        let firstMatch = response.match[1]
        let secondMatch = response.match[2]
        if (firstMatch) {
            name = firstMatch
        } else if (secondMatch) {
            name = secondMatch
        }
        if (name.toLowerCase() === "noodlebot") {
            return response.reply("You're not noodleBot--I'm noodleBot!")
        } else {
            return response.reply(
                "Nice to meet you, " + name + ", what're your favorite noodles?"
            )
        }
    })

    // coming next: adding noodle types
    // robot.respond(/(.*) is a noodle, too/i, function(response) {
    //     let match = response.match[1]
    //     if (match) {
    //         let newNoodle = match.toLowerCase()
    //         if (noodleList.indexOf(newNoodle) !== -1) {
    //             return response.reply("I already know that noodle!")
    //         } else {
    //             noodleList.push(newNoodle)
    //             noodleListRegEx = _getNoodleBotRegEx(noodleList)
    //             console.log(noodleList)
    //             console.log(noodleListRegEx)
    //             return response.reply("Thanks for the new noodle variety!")
    //         }
    //     }
    // })
}
