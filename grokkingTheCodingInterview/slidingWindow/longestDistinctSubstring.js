/*
Given a string, find the length of the longest substring in it with no more than 
K distinct characters.

You can assume that K is less than or equal to the length of the given string.
*/

class Solution{
  findLength(str, k) {
    let maxLength = 0,
        start = 0;
    const letters = {};
    for (let end = 0; end < str.length; end++) {
      // grow window
      const char = str[end];
      letters[char] = letters[char] ? letters[char] + 1 : 1;
      // shrink window
      while (Object.keys(letters).length > k) {
        const removeChar = str[start];
        letters[removeChar] = letters[removeChar] - 1;
        if (letters[removeChar] === 0) delete letters[removeChar];
        start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
  }
}