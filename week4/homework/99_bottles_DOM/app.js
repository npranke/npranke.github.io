function getLyric(lyricNum) {
    let numBottles = lyricNum > 0 ? lyricNum : "no more"
    let numBottlesDecremented = lyricNum > 1 ? lyricNum - 1 : "no more"

    let wordForBottle = lyricNum === 1 ? "bottle" : "bottles"
    let wordForBottleDecremented = lyricNum === 2 ? "bottle" : "bottles"

    let firstLine, secondLine
    if (lyricNum > 0) {
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
    } else if (lyricNum === 0) {
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
    return {
        firstLine: firstLine,
        secondLine: secondLine
    }
}

$(document).ready(function () {
    let $lyricList = $("#the-lyrics")
    for (let i = 99; i >= 0; i--) {
        $lyricList.append("<li>" + getLyric(i).firstLine + "&ensp;" + getLyric(i).secondLine + "</li>")
    }
})
