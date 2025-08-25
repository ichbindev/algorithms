/*
Given a string, find all of its permutations preserving the character sequence 
but changing case.

Constraints:
- 1 <= str.length <= 12
- str consists of lowercase English letters, uppercase English letters, and digits.
*/

class Solution {
  findLetterCaseStringPermutations(str) {
    const permutations = [str];
    for (const [c, char] of Object.entries(str)) {
      if (!isNaN(parseInt(char, 10))) continue; // digits only have one case
      const numPermutations = permutations.length;
      for (let i = 0; i < numPermutations; i++) {
        const asArray = permutations[i].split('');
        if (char === char.toLowerCase()) asArray[c] = char.toUpperCase();
        else asArray[c] = char.toLowerCase();
        permutations.push(asArray.join(''));
      }
    }
    return permutations;
  }
}
