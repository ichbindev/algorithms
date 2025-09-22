/*
Given a set of positive numbers, determine if a subset exists whose sum is 
equal to a given number ‘S’.

Constraints:
- 1 <= num.length <= 200
- 1 <= num[i] <= 100
*/

class Solution {
  canPartition(num, sum) {
    const dp = Array(sum + 1).fill(false);
    dp[0] = true;
    if (num[0] <= sum) dp[num[0]] = true;
    for (const [_, n] of num.slice(1).entries()) {  
      for (let s = sum; s > 0; s--) {
        if (!dp[s] && s >= n) {
          dp[s] = dp[s - n];
        }
      }
    }

    return dp[sum];
  }
}
