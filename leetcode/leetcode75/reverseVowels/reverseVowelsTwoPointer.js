/*
    Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let result = s;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
      if (!vowels.has(s[start])) {
          start++;
          continue;
      }
      if (!vowels.has(s[end])) {
          end--;
          continue;
      }
      result = swapChars(result, start, end);
      start++;
      end--;
  }
  return result;
};

function swapChars(str, idx1, idx2) {
  let swapped = set(str, idx1, str[idx2]);
  swapped = set(swapped, idx2, str[idx1]);
  return swapped;
}

function set(str, idx, char) {
  return str.substring(0, idx) + char + str.substring(idx + 1);
}
