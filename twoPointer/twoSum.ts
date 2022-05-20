/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
function twoSum(nums: number[], target: number): number[] {
  const sorted = [...nums].sort((a, b) => a - b);
  let left = 0, 
      right = sorted.length - 1;

  while (left < right) {
      const total = sorted[left] + sorted[right];
      if (total < target) {
          ++left;
      } else if (total > target) {
          --right;
      } else {
          return [
              nums.indexOf(sorted[left]), 
              nums.lastIndexOf(sorted[right])
          ];
      }
  }
  
  return [-1, -1];
};