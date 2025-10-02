/*
There are n houses built in a line. A thief wants to steal the maximum possible 
money from these houses. The only restriction the thief has is that he can't steal 
from two consecutive houses, as that would alert the security system. How should 
the thief maximize his stealing?

Problem Statement
Given a number array representing the wealth of n houses, determine the maximum 
amount of money the thief can steal without alerting the security system.

Constraints:
- 1 <= wealth.length <= 100
- 0 <= wealth[i] <= 400
*/

class Solution {
  findMaxSteal(wealth) {
    const dp = [ 0, wealth[0] ];

    while (dp.length <= wealth.length + 1) {
      const n = dp.length,
            m1 = dp[n - 1],
            m2 = dp[n - 2] + (wealth[n - 1] || 0);
      const max = Math.max(m1, m2);
      dp.push(max);
    }

    return dp[wealth.length + 1];
  }
}