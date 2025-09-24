/*
Given a set of positive numbers, partition the set into two subsets with minimum 
difference between their subset sums.

Constraints:
- 1 <= num.length <= 200
- 1 <= num[i] <= 100
*/

class Solution {
  canPartition(num) {
    const totalSum = num.reduce((a, c) => a + c),
          targetSum = Math.floor(totalSum / 2),
          dp = Array.from({ length: num.length }, () => 
            Array(targetSum + 1).fill(false)
          );

    for (const [i, n] of num.entries()) {
      for (const s of dp[0].keys()) {
        if (s === 0) {
          dp[i][s] = true;
        } else if (i === 0) {
          dp[i][s] = s === n;
        } else {
          dp[i][s] = dp[i - 1][s] || s >= n && dp[i - 1][s - n];
        }
      }
    }

    for (const [i, available] of dp[num.length - 1].reverse().entries()) {
      if (available) {
        const currentSum = targetSum - i;
        const otherSum = totalSum - currentSum;
        return Math.abs(otherSum - currentSum);
      }
    }
  }
}
