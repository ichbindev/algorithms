/*
Given a stair with 'n' steps, implement a method to count how many possible ways are there to reach the top of the staircase, given that, at every step you can either take 1 step, 2 steps, or 3 steps.

Constraints:
- 1 <= n <= 45.
*/

class Solution {

  countWays(n) {
    const dp = [1, 1, 2];

    while (dp.length <= n && dp.length < 100) {
      const next = dp[dp.length - 1] +
                   dp[dp.length - 2] +
                   dp[dp.length - 3];
      dp.push(next);
    }

    return dp[n];
  }

}