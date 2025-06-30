/*
You’re given a string s and a list of words words, 
where all words have the same length.

A concatenated substring is formed by joining all the 
words from any permutation of words — each used exactly 
once, without any extra characters in between.

For example, if words = ["ab", "cd", "ef"], then valid 
concatenated strings include "abcdef", "abefcd", "cdabef", 
"cdefab", "efabcd", and "efcdab". A string like "acdbef" is 
not valid because it doesn't match any complete permutation 
of the given words.

Return all starting indices in s where such concatenated 
substrings appear. You can return the indices in any order.
*/

class Solution {
  findWordConcatenation(str, words) {
    const resultIndices = [],
          wordCounts = {},
          wordCount = words.length,
          wordLength = words[0].length;
    const totalLength = wordCount * wordLength;

    for (const word of words) {
      wordCounts[word] = wordCounts[word] + 1 || 1;
    }

    for (let start = 0; start < str.length - totalLength + 1; start++) {
      const seen = {};
      
      for (let wordNumber = 0; wordNumber <= wordCount; wordNumber++) {
        const startIndex = start + wordNumber * wordLength;
        const endIndex = startIndex + wordLength;

        const word = str.substring(startIndex, endIndex);
        if (word in wordCounts) {
          seen[word] = seen[word] + 1 || 1;
        }
        if (!(word in wordCounts) || seen[word] > wordCounts[word]) {
          break;
        }
        if (wordNumber + 1 === wordCount) {
          resultIndices.push(start);
        }
      }
    }

    return resultIndices;
  }
}
