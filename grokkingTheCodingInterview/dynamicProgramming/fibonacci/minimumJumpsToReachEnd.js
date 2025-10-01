/*
Given an array of positive numbers, where each element represents 
the max number of jumps that can be made forward from that element, 
write a program to find the minimum number of jumps needed to reach 
the end of the array (starting from the first element). If an element 
is 0, then we cannot move through that element.

Constraints:
- 1 <= jumps.length <= 10^4
- 0 <= jumps[i] <= 1000
- It's guaranteed that you can reach jumps[n - 1].
*/

class Solution {
  countMinJumps(jumps) {
    const dp = new Array(jumps.length).fill(Infinity);
    dp[0] = 0;
    for (let start = 0; start < jumps.length - 1; start++) {
      for (let end = start + 1; end <= start + jumps[start] && end < jumps.length; end++) {
        dp[end] = Math.min(dp[start] + 1, dp[end]);
      }
    }
    return dp[jumps.length - 1];
  }
}