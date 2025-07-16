/*
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.
*/

class Solution {

  findNumbers(nums, k) {
    let i = 0, 
        missingNumbers = [];
    while (i < nums.length) {
      const isInBounds = nums[i] > 0 && nums[i] < nums.length;
      const j = nums[i] - 1;
      if (isInBounds && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }

    i = 1;
    const extraNumbers = new Set();
    while (missingNumbers.length < k) {
      if (i > nums.length || nums[i - 1] !== i) {
        if (!extraNumbers.has(i)) missingNumbers.push(i);
        extraNumbers.add(nums[i - 1] || 0);
      }
      i++;
    }
    return missingNumbers;
  }
}
