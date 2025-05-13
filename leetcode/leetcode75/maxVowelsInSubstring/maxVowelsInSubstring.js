/*
    Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

    Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const isVowel = (x) => vowels.has(x);
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0,
        maxCount = 0;
    for (let [i, c] of Array.from(s).entries()) {
        if (isVowel(c)) count++;
        if (i - k >= 0 && isVowel(s[i - k])) count--;
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};