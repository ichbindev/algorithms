/*
    Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let result = s.split('');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  const stack = [];
  for (let c of result) {
      if (vowels.has(c)) {
          stack.push(c);
      }
  }

  result.forEach((c, i) => {
      if (vowels.has(c)) {
          result[i] = stack.pop();
      }
  });

  return result.join('');
};

function set(str, idx, char) {
  return str.substring(0, idx) + char + str.substring(idx + 1);
}
