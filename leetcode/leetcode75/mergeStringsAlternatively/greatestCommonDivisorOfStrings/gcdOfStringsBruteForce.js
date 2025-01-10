/*
    For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if ((str1 + str2) !== (str2 + str1)) return '';
  let len = Math.min(str1.length, str2.length);
  let long, short;
  if (len === str1.length) {
      short = str1;
      long = str2;
  } else {
      short = str2;
      long = str1;
  }
  let possibleGcd = short;
  while (possibleGcd && len) {
      while (long.length % len !== 0 && short.length % len !== 0) {
          len--;
      }   
      const possibleGcd = short.substring(0, len);
      const timesL = long.length / len;
      const timesS = short.length / len;
      if (possibleGcd.repeat(timesL) === long && possibleGcd.repeat(timesS) === short) {
          return possibleGcd;
      } else {
          len--;
      }
  }
  return '';
};
