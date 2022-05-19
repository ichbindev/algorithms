const PARENTHESIS = '()';

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const parenthesis = new Set();
    generateParenthesisHelper('', n, parenthesis);
    return Array.from(parenthesis.values());
};

function generateParenthesisHelper(current, numLeft, results) {
    if (numLeft) {
        const middle = Math.floor(current.length / 2);
        for (let i = middle; i <= current.length; i++) {
            const next = current.substring(0, i) + PARENTHESIS + current.substring(i);
            generateParenthesisHelper(next, numLeft - 1, results);
        }
    } else {
        results.add(current);
    }
}

// only add ()
// start in the middle and add
// advance one and add
// stop when you're at the end of the string
