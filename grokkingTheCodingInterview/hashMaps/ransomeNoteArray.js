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
        // build freq array for magazine
        const magArr = new Array(26).fill(0),
              { getIndex } = this;
        for (const c of magazine) {
            ++magArr[getIndex(c)];
        }

        // check if ransom note in magazine
        for (const c of ransomNote) {
            const count = --magArr[getIndex(c)];
            console.log(c, count)
            if (count < 0) return false;
        }

        return true;
    }

    getIndex(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

}
