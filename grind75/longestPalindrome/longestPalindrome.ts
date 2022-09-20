/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

/*
Runtime: 64 ms, faster than 99.60% of TypeScript online submissions for Longest Palindrome.
Memory Usage: 45.5 MB, less than 37.40% of TypeScript online submissions for Longest Palindrome.
*/

// O(n) where n is the length of the string, O(1) space (array of 128 ints)
function longestPalindrome(s: string): number {
  // instead of building out a string and validating if it's a palindrome
  // we rely on the fact that all you need is a pair of characters, one for each side
  // with possibly an unmatched character in the middle. by counting characters
  // we can figure out the longest length without building out any strings
  let totalLength = 0;
  
  // get a count of each character
  const counts = new Array(128).fill(0);
  for (let c of s) {
      const index = c.charCodeAt(0);
      ++counts[index];
  }
  
  // build the length of the palindrome based on the character counts
  for (let count of counts) {
      if (count) {
          // you can increase the length by the number of even characters
          if (count % 2 === 0) {
              totalLength += count;
          } else {
              totalLength += count - 1;
          }

          // if there is an unmatched character (odd count)
          // AND you haven't already added one (even total length)
          // you can put it in the middle, increasing length by 1
          if (count % 2 === 1 && totalLength % 2 === 0) {
              ++totalLength;
          }
      }
  }
  
  return totalLength;
};
