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
      if (nums[i] !== 0) {
          nums[z] = nums[i];
          z++;
      }
  }

  for (let j = z; j < nums.length; j++) {
      nums[j] = 0;
  }
};
