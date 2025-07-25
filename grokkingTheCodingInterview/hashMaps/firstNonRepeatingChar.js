/*
Given a string, identify the position of the first 
character that appears only once in the string. If 
no such character exists, return -1.

- 1 <= s.length <= 105
- s consists of only lowercase English letters.
*/

class Solution {
    firstUniqChar(s) {
        const map = {};

        for (const c of s) {
            map[c] = map[c] + 1 || 1;
        }

        for (const [i, c] of [...s].entries()) {
            if (map[c] === 1) return i;
        }
        return -1;
    }
}
