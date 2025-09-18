/*
Given two integer arrays to represent weights and profits of ‘N’ items, 
we need to find a subset of these items which will give us maximum profit 
such that their cumulative weight is not more than a given number ‘C.’ Each 
item can only be selected once, which means either we put an item in the 
knapsack or we skip it.
*/

class Solution {
  solveKnapsack(profits, weights, capacity) {
    const dp = Array.from({ length: capacity + 1 }, () => 
      new Array(weights.length + 1).fill(0)
    );

    for (let capacity = 1; capacity < dp.length; capacity++) {
      for (let item = 1; item < dp[0].length; item++) {
        let profitWith = 0,
            itemIdx = item - 1;
        const weight = weights[itemIdx],
              profit = profits[itemIdx];
        if (capacity >= weight) {
          profitWith = dp[capacity - weight][item - 1] + profit;
        }
        const profitWithout = dp[capacity][item - 1];
        dp[capacity][item] = Math.max(profitWith, profitWithout);
      }
    }

    const bestProfit = dp[capacity][weights.length];
    return bestProfit;
  }
}
