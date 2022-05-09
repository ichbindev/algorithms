/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/
function maxSubArray(nums: number[]): number {
  let maxSubarraySum = -Infinity,
      currentSum = 0;
  
  nums.forEach(num => {
      currentSum = Math.max(currentSum + num, num);
      maxSubarraySum = Math.max(maxSubarraySum, currentSum);
  });
  
  return maxSubarraySum;
};