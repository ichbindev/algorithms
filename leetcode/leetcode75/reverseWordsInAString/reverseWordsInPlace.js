/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // done in-place-y (strings are immutable in js, so it's converted to a char array)
  const c = Array.from(s);
  // reverse the whole string
  reverse(c, 0, c.length - 1);
  // reverse words in place, taking account for white space
  // return index of where garbage starts (due to replaced white space)
  const lastIndex = reverseWordsReturnEndIdx(c);
  // gotta turn it back into a string here because js
  return c.join('').substring(0, lastIndex - 1);
};

function findLastIndex(c) {
  let i = c.length - 1;
  while (i <= 0 && c[i] === ' ') {
      i--;
  }
  return i;
}

function reverseWordsReturnEndIdx(c) {
  let current = 0;
  let left = 0;
  let right = 0;
  while (current < c.length) {
      while (current < c.length && c[current] === ' ') current++;
      if (current === c.length) break;
      while (current < c.length && c[current] !== ' ') {
          c[right] = c[current];
          right++;
          current++;
      }
      reverse(c, left, right - 1);
      c[right] = ' ';
      right++;
      left = right;
      current++;
  }
  return right;
}

function reverse(a, s, e) {
  while (s < e) {
      [a[s], a[e]] = [a[e], a[s]];
      s++;
      e--;
  }
}