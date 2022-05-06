/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true;
    let candidate = 2;
    let square = 4;
    while (square < num) {
        square += candidate + ++candidate;
    }
    return square === num;
};
