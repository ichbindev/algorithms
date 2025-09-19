/*
Given a set of positive numbers, find if we can partition it into two 
subsets such that the sum of elements in both subsets is equal.

Constraints:
- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100
*/

class Solution {
  canPartition(nums) {
    // sum the entire array
    const totalSum = nums.reduce((a, c) => a + c);
    // if entire array = totalSum, then if we partition it into two equal parts
    // both of those parts must sum to totalSum / 2
    if (totalSum % 2) return false; // thus totalSum can't be odd
    const targetSum = totalSum / 2; // let's find a subset that sums to targetSum
                                    // if it exists, then the unused nums sum to the same
    
    // we will take a bottom up approach
    // fill in which sums we can make by using which elements
    const dp = Array.from({ length: nums.length }, () =>
      new Array(totalSum).fill(false)
    );

    for (const [i, n] of nums.entries()) {
      for (const s of Array(targetSum + 1).keys()) {
        // these first 2 are the base cases needed to fill out the dp array
        if (s === 0) { // we can always make 0 by using no elements
          dp[i][s] = true;                                          
        } else if (i === 0) { // if we just the first element, sum must = that element
          dp[i][s] = n === s;

        // the real thinkers start here
        // dp[i - 1][s] being true means we can make this sum by not using the element
        // dp[i - 1][s - n] means we could make the sum - this number without using it,
        // aka we can make this sum exactly by using the element
        } else {
          dp[i][s] = dp[i - 1][s] || s >= n && dp[i - 1][s - n];
        }
      }
    }

    return dp[nums.length - 1][targetSum];
  }
}
