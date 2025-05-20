/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

class Solution {
  reverseVowels(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const sArr = s.split('');
    let left = 0,
        right = s.length - 1;
    while (left < right) {
      if (!vowels.has(s[left].toLowerCase())) {
        left++;
        continue;
      }
      if (!vowels.has(s[right].toLowerCase())) {
        right--;
        continue;
      }
      swap(sArr, left, right);
      left++;
      right--;
    }
    return sArr.join('');
  }
}
