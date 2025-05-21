/*
  Given an array of strings, `words`, and two different strings that 
  already exist in the array, `word1` and `word2`, return the shortest 
  distance between these two words in the list.
*/
class Solution {
  shortestDistance(words, word1, word2) {
    let closest1 = -1;
    let closest2 = -1;
    let leastDistance = Number.MAX_SAFE_INTEGER;
    for (const [idx, word] of words.entries()) {
      if (word === word1) {
        closest1 = idx;
      } else if (word === word2) {
        closest2 = idx;
      }
      if (closest1 >= 0 && closest2 >= 0) {
        leastDistance = Math.min(Math.abs(closest1 - closest2), leastDistance);
      }
    }
    return leastDistance;
  }
}
