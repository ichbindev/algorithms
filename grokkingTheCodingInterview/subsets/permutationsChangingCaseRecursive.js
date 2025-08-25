/*
Given a string, find all of its permutations preserving the character sequence 
but changing case.

Constraints:
- 1 <= str.length <= 12
- str consists of lowercase English letters, uppercase English letters, and digits.
*/

class Solution {
  findLetterCaseStringPermutations(str) {
    const permutations = [];
    this.doPermutations('', str, permutations);
    return permutations;
  }

  doPermutations(done, remaining, results) {
    if (remaining === '') {
      results.push(done);
      return;
    }
    
    const char = remaining[0];
    const toDo = remaining.substring(1);
    if (!isNaN(parseInt(char, 10))) {
      this.doPermutations(done + char, toDo, results);
    } else {
      this.doPermutations(done + char.toLowerCase(), toDo, results);
      this.doPermutations(done + char.toUpperCase(), toDo, results);
    }
  }
}
