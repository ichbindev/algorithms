/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/
function sortedSquares(nums: number[]): number[] {
  let left = 0,
      right = nums.length - 1,
      result = [];

  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      result.push(nums[left] ** 2);
      ++left;
    } else {
      result.push(nums[right] ** 2);
      --right;
    }
  }

  return result.reverse();
};