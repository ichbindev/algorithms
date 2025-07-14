/*
We are given an unsorted array containing n+1 numbers 
taken from the range 1 to n. The array has only one 
duplicate but it can be repeated multiple times. Find 
that duplicate number without using any extra space. 
You are, however, allowed to modify the input array.
*/

class Solution {
  findNumber(nums) {
    let i = 0;
    while (i < nums.length) {
      const placeAt = nums[i] - 1;
      if (placeAt !== i) {
        if (nums[i] === nums[placeAt]) return nums[i];
        [nums[i], nums[placeAt]] = [nums[placeAt], nums[i]];
      } else {
        i++;
      }
    }
    return -1;
  }
}
