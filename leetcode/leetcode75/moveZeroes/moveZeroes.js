/*
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let z = 0;
  for (let i = 0; i < nums.length; i++) {
      z = findNextNonZeroNumber(nums, z);
      if (z < nums.length) {
          nums[i] = nums[z];
      } else {
          nums[i] = 0;
      }
      z++;
  }
};

function findNextNonZeroNumber(nums, z) {
  while (z < nums.length && nums[z] === 0) {
      z++;
  }
  return z;
}