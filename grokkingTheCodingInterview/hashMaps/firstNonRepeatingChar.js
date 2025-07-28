/*
Given a string, identify the position of the first 
character that appears only once in the string. If 
no such character exists, return -1.

- 1 <= s.length <= 105
- s consists of only lowercase English letters.
*/

class Solution {
  firstUniqChar(s) {
    const charArr = Array.from(s),
      map = {};

    charArr.forEach((char) => (map[char] = map[char] + 1 || 1));

    return charArr.findIndex((x) => map[x] === 1);
  }
}
