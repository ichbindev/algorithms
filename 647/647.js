/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const substrings = generateSubstrings(s);
    let count = 0;
    for (const string of substrings) {
        if (isPalindrome(string)) {
            count++;
        }
    }
    return count;
};

function generateSubstrings(string) {
    const substrings = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = string.length; j > i; j--) {
            substrings.push(string.substring(i, j));
        }
    } 
    return substrings;
}

function isPalindrome(string) {
    if (string.length === 1) return true;
    const reversed = string.split("").reverse().join("");
    return string === reversed;
}
