/*
Given two strings, one representing a ransom note 
and the other representing the available letters from 
a magazine, determine if it's possible to construct the 
ransom note using only the letters from the magazine. 
Each letter from the magazine can be used only once.

- 1 <= ransomNote.length, magazine.length <= 105
- ransomNote and magazine consist of lowercase English letters.
*/

class Solution {
    canConstruct(ransomNote, magazine) {
        // build freq map for magazine
        const map = {};
        for (const c of magazine) {
            map[c] = (map[c] || 0) + 1;
        }

        // check if ransom note in magazine
        for (const c of ransomNote) {
            if (!map[c]) return false;
            --map[c];
        }

        return true;
    }
}
