/*
Given string s, determine whether it's possible to make a given string 
palindrome by removing at most one character.

A palindrome is a word or phrase that reads the same backward as forward.

Constraints:
- 1 <= s.length <= 10^5
- str consists of lowercase English letters.
*/

class Solution {
  isPalindromePossible(s) {
    let left = 0,
      right = s.length - 1,
      updates = 0;
    while (left < right) {
      if (s[left] !== s[right]) {
        if (updates) return false;
        if (s[left + 1] === s[right]) {
          left++;
          updates++;
        } else if (s[left] === s[right - 1]) {
          right--;
          updates++;
        } else {
          return false;
        }
      }
      left++;
      right--;
    }
    return true;
  }
}
