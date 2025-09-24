/*
Given a set of positive numbers, determine if a subset exists whose sum is 
equal to a given number ‘S’.

Constraints:
- 1 <= num.length <= 200
- 1 <= num[i] <= 100
*/

class Solution {
  canPartition(num, sum) {
    const dp = Array.from({ length: num.length }, () =>
      Array(sum + 1).fill(false)
    );

    for (const [i, n] of num.entries()) {
      for (const s of Array(sum + 1).keys()) {
        if (s === 0) {
          dp[i][s] = true;
        } else if (i === 0) {
          dp[i][s] = s === n;
        } else {
          dp[i][s] = dp[i - 1][s] || s >= n && dp[i - 1][s - n];
        }
      }
    }

    return dp[num.length - 1][sum];
  }
}
