// Given an array of positive numbers and a positive number 'k,' 
// find the maximum sum of any contiguous subarray of size 'k'.

class Solution {
  findMaxSumSubArray (k, arr) {
    let maxSum = -Infinity;
    let sum = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
      if (end >= k - 1) {
        maxSum = Math.max(maxSum, sum);
        sum -= arr[end - k + 1];
      }
    }
    return maxSum;
  };
}
