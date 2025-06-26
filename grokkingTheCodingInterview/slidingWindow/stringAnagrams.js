/*
Given a string and a pattern, find all anagrams 
of the pattern in the given string.

Every anagram is a permutation of a string. As we know, 
when we are not allowed to repeat characters while finding 
permutations of a string, we get  permutations (or anagrams) 
of a string having  characters. For example, here are the six 
anagrams of the string abc:
  abc, acb, bac, bca, cab, cba

Write a function to return a list of starting indices of the 
anagrams of the pattern in the given string.
*/

class Solution {
  findStringAnagrams(str, pattern) {
    const resultIndices = [];
    const counts = {};
    let start = 0,
        matched = 0;

    // build counts of pattern to track matches
    for (const c of pattern) {
      counts[c] = counts[c] + 1 || 1;
    }

    for (const [end, c] of Object.entries(str)) {
      // grow window
      if (c in counts) counts[c]--;
      if (counts[c] === 0) matched++; // all of that char are matched

      // shrink window
      if (end - start + 1 > pattern.length) {
        const startChar = str[start];
        if (counts[startChar] === 0) matched--; // we're undoing a match
        if (startChar in counts) counts[startChar]++;
        start++;
      }

      // check match
      if (matched === Object.keys(counts).length) resultIndices.push(start); 
    }

    return resultIndices;
  }
}
