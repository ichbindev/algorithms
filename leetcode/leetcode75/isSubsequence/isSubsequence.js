/*
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sp = 0;
  for (let tp = 0; tp < t.length; tp++) {
      if (s[sp] === t[tp]) {
          sp++;
      }
  }
  return sp === s.length;
};