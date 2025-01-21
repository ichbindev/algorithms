/*
Give    t i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false;
  let largest = nums[nums.length - 1];
  let smallest = undefined;
  for (let i = nums.length - 2; i >= 0; i--) {
      if (!smallest && nums[i] < largest) {
          smallest = nums[i];
      }
      else if (nums[i] > largest) {
          largest = nums[i];
      } else if (nums[i] < largest) {
          if (nums[i] < smallest) {
              return true;
          }
          smallest = nums[i];
      } 
  }
  return false;
};
