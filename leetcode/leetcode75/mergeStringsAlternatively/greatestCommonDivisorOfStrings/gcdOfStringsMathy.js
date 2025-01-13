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
  const gcdLength = findGCDLength(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};

function findGCDLength(x, y) {
    if (y === 0) {
        return x;
    }
    return findGCDLength(y, x % y);
}