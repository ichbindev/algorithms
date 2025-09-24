/*
You are given a set of positive numbers and a target sum ‘S’. Each number should 
be assigned either a ‘+’ or ‘-’ sign. We need to find the total ways to assign 
symbols to make the sum of the numbers equal to the target ‘S’.

Constraints:

1 <= num.length <= 20
0 <= num[i] <= 1000
0 <= sum(num[i]) <= 1000
-1000 <= S <= 1000
*/

class Solution {
  findTargetSubsets(num, s) {
    // check if we can reduce!
    // sum(s1) - sum(s2) = s
    // we also know sum(s1) + sum(s2) = sum(num)
    // so sum(s1) - s = sum(s2), 2sum(s1) - s = sum(num)
    // 2sum(s1) = sum(num) + s, sum(s1) = (sum(num) + s)/ 2
    // solve as subset sum count problem
    const totalSum = num.reduce((a, c) => a + c),
          target = (totalSum + s) / 2;
    if (totalSum < s || (s + totalSum) % 2) return 0;

    const dp = Array.from({ length: num.length }, () =>
      new Array(target + 1).fill(0)
    );

    for (const [i, n] of num.entries()) {
      for (const s of dp[0].keys()) {
        if (s === 0) {
          dp[i][s] = 1;
        } else if (i === 0) {
          dp[i][s] = s === n ? 1 : 0;
        } else {
          dp[i][s] = dp[i - 1][s];
          if (s >= n) dp[i][s] += dp[i - 1][s - n];
        }
      }
    }
    
    return dp[num.length - 1][target];
  }
}
