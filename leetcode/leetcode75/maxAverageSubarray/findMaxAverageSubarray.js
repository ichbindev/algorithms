/*
    You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0, lag = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (i - lag + 1 === k) {
          console.log('sum', sum, 'maxSum', maxSum);
          maxSum = Math.max(sum, maxSum);
          sum -= nums[lag];
          lag++;
      }
  }
  return maxSum / k;
};