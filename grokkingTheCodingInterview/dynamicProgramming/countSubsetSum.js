/*
Given a set of positive numbers, find the total number of subsets whose 
sum is equal to a given number ‘S’.

Constraints:
- 1 <= num.length <= 20
- 0 <= num[i] <= 1000
- 0 <= sum(num[i]) <= 1000
- -1000 <= S <= 1000
*/

class Solution {
  countSubsets(num, sum) {
    const dp = Array.from({ length: num.length }, () => 
      new Array(sum + 1).fill(0)
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

    return dp[num.length - 1][sum];
  }
}
