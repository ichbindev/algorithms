/*
Given an unsorted array containing numbers, find 
the smallest missing positive number in it.

Note: Positive numbers start from '1'.
*/

class Solution {
  findNumber(nums) {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1;
      const isInBounds = nums[i] > 0 && nums[i] < nums.length;
      if (isInBounds && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }

    let missingNo = 1; // ;)
    for (missingNo; missingNo <= nums.length; missingNo++) {
      if (nums[missingNo - 1] !== missingNo) {
        break;
      }
    }
    return missingNo;
  }
}
