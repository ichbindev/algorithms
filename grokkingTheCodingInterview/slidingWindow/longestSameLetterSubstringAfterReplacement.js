/*
Given a string with lowercase letters only, if you are allowed 
to replace no more than ‘k’ letters with any letter, find the 
length of the longest substring having the same letters after replacement.
*/

class Solution {
  findLength(str, k) {
    let maxLength = 0,
        start = 0,
        charCounts = {},
        maxCount = 0;

    for (let end = 0; end < str.length; end++) {
      let windowLength = end - start + 1;
      
      // grow window
      const char = str[end];
      charCounts[char] = char in charCounts ? charCounts[char] + 1 : 1;
      maxCount = Math.max(charCounts[char], maxCount);

      // shrink window
      while (windowLength - maxCount > k) {
        const startChar = str[start];
        charCounts[startChar] -= 1;
        start++;
        windowLength--;
      }

      // check length
      maxLength = Math.max(maxLength, windowLength);
    }

    return maxLength;
  }
}
