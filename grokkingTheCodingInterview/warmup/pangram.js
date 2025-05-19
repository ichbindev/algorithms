/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
*/

class Solution {

  checkIfPangram(sentence) {
    sentence = sentence.toLowerCase();
    const letters = new Set();
    for (const char of sentence) {
      if (char >= 'a' && char <= 'z') {
        letters.add(char);
      }
    }

    return letters.size === 26;
  }
}
