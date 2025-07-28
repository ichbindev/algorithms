/*
Given a string, determine the length of the longest 
palindrome that can be constructed using the characters 
from the string. You don't need to return the palindrome 
itself, just its maximum possible length.

- 1 <= s.length <= 2000
- s consists of lowercase and/or uppercase English letters only.
*/

class Solution {
  longestPalindrome(s) {
    // create freq map
    const counts = {};
    for (const c of s) {
      counts[c] = (counts[c] || 0) + 1;
    }

    // count possible palindrome length
    let length = 0,
      singleton = 0;
    for (const v of Object.values(counts)) {
      if (v % 2 === 0) {
        length += v;
      } else {
        length += v - 1;
        if (!singleton) singleton++;
      }
    }

    return length + singleton;
  }
}
