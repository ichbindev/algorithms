/*
Given a string s, find the length of the longest substring without repeating characters.
*/

/*
Runtime: 178 ms, faster than 50.06% of TypeScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 48.9 MB, less than 56.78% of TypeScript online submissions for Longest Substring Without Repeating Characters.
*/

// sliding window solution, O(n) run time with O(n) extra memory
// (you could argue O(1) extra memory since you could use a 128 num[] I guess)
function lengthOfLongestSubstring(s: string): number {
  // create the window and window tracker
  let longestSubstring = 0,
      start = 0,
      charToIndex: Record<string, number> = {};

// iterate and slide the window
  for (let end = 0; end < s.length; ++end) {
      const currentChar = s[end];
      // if char is already seen since start, shrink the window
      if (charToIndex[currentChar] !== undefined) {
        start = Math.max(start, charToIndex[currentChar] + 1);
      }

      // log the current index of the char and compare substring sizes
      charToIndex[currentChar] = end;
      longestSubstring = Math.max(longestSubstring, end - start + 1);
  }
  return longestSubstring;
};