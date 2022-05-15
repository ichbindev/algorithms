/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/
function search(nums: number[], target: number): number {
  let start = 0,
      end = nums.length;
  
  while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          start = mid + 1;
      } else {
          end = mid;
      }
  }
  
  return -1;
};