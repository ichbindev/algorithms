/*
Given a string, determine the maximum number of times 
the word "balloon" can be formed using the characters 
from the string. Each character in the string can be 
used only once.
*/

class Solution {
    maxNumberOfBalloons(text) {      
        let minCount = Number.POSITIVE_INFINITY;
        const balloonMap = {
            'b': 1,
            'a': 1,
            'l': 2,
            'o': 2,
            'n': 1,
        }
        const textMap = {};
        for (const c of text) {
            textMap[c] = textMap[c] + 1 || 1;
        }

        for (const c in balloonMap) {
            minCount = Math.min(textMap[c] / balloonMap[c], minCount);
        }

        return Math.floor(minCount) || 0;
    }
}
