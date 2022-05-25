/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/
function sortedSquares(nums: number[]): number[] {
  let firstNonNegative = nums.findIndex(x => x >= 0),
        right = firstNonNegative >= 0 ? firstNonNegative : nums.length,
        left = right - 1,
        result = [];
  
  while (left >= 0 || right < nums.length) {
      if (left >= 0 && right < nums.length) {
          if (Math.abs(nums[left]) <= nums[right]) {
              const squared = nums[left] * nums[left];
              result.push(squared);
              --left;
          } else {
              const squared = nums[right] * nums[right];
              result.push(squared);
              ++right;
          }
      } else if (left >= 0) {
          const squared = nums[left] * nums[left];
              result.push(squared);
              --left;
      } else {
          const squared = nums[right] * nums[right];
              result.push(squared);
              ++right;
      }
  }
  
  return result;
};