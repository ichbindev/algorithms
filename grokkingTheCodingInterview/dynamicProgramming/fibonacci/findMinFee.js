/*
Given a staircase with ‘n’ steps and an array of 'n' numbers representing 
the fee that you have to pay if you take the step. Implement a method to 
calculate the minimum fee required to reach the top of the staircase (beyond 
the top-most step). At every step, you have an option to take either 1 step, 
2 steps, or 3 steps. You should assume that you are standing at the first step.
*/

class Solution {
  findMinFee(fee) { 
    const dp = [ fee[0] ];

    while (dp.length <= fee.length + 1) {
      const len = dp.length,
            fees = [ dp[len - 1] ];
      dp[len - 2] && fees.push(dp[len - 2]);
      dp[len - 3] && fees.push(dp[len - 3]);
      const minFees = Math.min(...fees) + (fee[len] || 0);
      dp.push(minFees);
    }
    
    return dp[fee.length + 1];
  }
}
