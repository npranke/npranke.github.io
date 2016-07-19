var exports = module.exports = {}


// returns a random int from the range [min, max)
exports.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// returns a the python style modulo (a mod n, as in clock arthimetic)
// see https://docs.python.org/2.7/reference/expressions.html#binary-arithmetic-operations
exports.clockStyleMod = function(a, n) {
    return a - (Math.floor(a / n) * n)
}
