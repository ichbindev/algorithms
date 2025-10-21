/*
Given a string s, return the longest palindromic substring in s.
*/

class Span {
    constructor(left, right) {
        this.left = left;
        this.right = right;
        this.length = right - left + 1;
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = new Span(0, 0);
    for (let i = 0; i < s.length; i++) {
        let even = getLongestPalindrome(s, i, i + 1);
        let odd = getLongestPalindrome(s, i - 1, i + 1);
        if (even.length > longest.length) {
            longest = even;
        }
        if (odd.length > longest.length) {
            longest = odd;
        }
    }
    return s.substring(longest.left, longest.right + 1);
};

function getLongestPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && 
    str[left] === str[right]) {
        left--;
        right++;
    }
    if (str[left] === str[right]) return new Span(left, right);
    return new Span(left + 1, right - 1);
}