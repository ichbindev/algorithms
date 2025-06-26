/*
Given a string and a pattern, find out if the string contains 
any permutation of the pattern.

Permutation is defined as the re-arranging of the characters 
of the string. For example, “abc” has the following six permutations:
  abc, acb, bac, bca, cab, cba

If a string has ‘n’ distinct characters, it will have n! permutations.
*/

class Solution {
  findPermutation(str, pattern) {
    let start = 0,
        matched = 0;
    const counts = this.buildPatternCounts(pattern);

    for (const [i, c] of Object.entries(str)) {
      // grow window 
      this.updateCounts(c, counts, true);
      if (counts[c] === 0) matched++;

      // check if all pattern is used
      if (matched === Object.keys(counts).length) return true;

      // shrink window to pattern.length - 1
      while (i - start + 1 >= pattern.length) {
        const startChar = str[start];
        if (counts[startChar] === 0) matched--;
        this.updateCounts(startChar, counts, false);
        start++;
      }
    }

    return false;
  }

  buildPatternCounts(pattern) {
    const counts = {};
    for (const c of pattern) {
      counts[c] = c in counts ? counts[c] + 1 : 1;
    }
    return counts;
  }

  updateCounts(char, counts, isGrowing) {
    if (char in counts) {
      counts[char] += isGrowing ? -1 : 1;
    }
  }
}
