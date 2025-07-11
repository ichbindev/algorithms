/*
We are given an array containing n distinct numbers 
taken from the range 0 to n. Since the array has only n 
numbers out of the total n+1 numbers, find the missing number.
*/

class Solution {
  findMissingNumber(nums) {
    let i = 0;
    while (i < nums.length) {
      const placeAtIdx = nums[i];
      if (placeAtIdx !== nums.length && nums[i] !== nums[placeAtIdx]) {
        [nums[i], nums[placeAtIdx]] = [nums[placeAtIdx], nums[i]];
      } else {
        i++;
      }
    }
    const missing = nums.indexOf(nums.length);
    return missing !== -1 ? missing : nums.length;
  }
}
