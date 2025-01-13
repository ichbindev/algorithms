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
  let shortestLen = Math.min(str1.length, str2.length);
  for (let i = shortestLen; i >= 0; i--) {
      const possibleGcd = str1.substring(0, i);
      if (isValidGcd(possibleGcd, str1, str2)) {
          return possibleGcd;
      }
  }
  return '';
};

function isValidGcd(gcd, str1, str2) {
  const gcdLength = gcd.length,
        str1Length = str1.length,
        str2Length = str2.length;
        
  if (str1.length % gcdLength !== 0 || str2Length % gcdLength !== 0) {
      return false;
  }
  const str1Candidate = gcd.repeat(str1Length / gcdLength);
  const str2Candidate = gcd.repeat(str2Length / gcdLength);
  return str1 === str1Candidate && str2 === str2Candidate;
}