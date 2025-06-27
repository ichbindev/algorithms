/*
Given a string and a pattern, find the smallest 
substring in the given string which has all the 
character occurrences of the given pattern.
*/

class Solution {
  findSubstring(str, pattern) {
    let start = 0,
        matched = 0,
        subStart = 0,
        minLength = str.length + 1;
    const counts = {};

    for (const c of pattern) {
      counts[c] = counts[c] + 1 || 1;
    }

    for (const [end, endChar] of Object.entries(str)) {
      // grow
      if (endChar in counts) {
        counts[endChar]--;
        if (counts[endChar] >= 0) matched++;
      }

      // check and shrink
      while (matched === pattern.length) {
        const windowSize = end - start + 1;
        if (minLength > windowSize) {
          minLength = windowSize;
          subStart = start;
        }

        const startChar = str[start];
        if (startChar in counts) {
          if (counts[startChar] === 0) matched--;
          counts[startChar]++;
        }
        start++;
      }
    }
    return minLength > str.length ? 
           '' :
           str.substring(subStart, subStart + minLength); 
  }
}
