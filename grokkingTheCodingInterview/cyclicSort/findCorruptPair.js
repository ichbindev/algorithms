/*
We are given an unsorted array containing ‘n’ numbers 
taken from the range 1 to ‘n’. The array originally contained 
all the numbers from 1 to ‘n’, but due to a data error, one 
of the numbers got duplicated which also resulted in one number 
going missing. Find both these numbers.
*/

class Solution {
  findNumbers(nums) {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }

    let num;
    for ([i, num] of nums.entries()) {
      if (num !== i + 1) return [num, i + 1];
    }

    return [-1, -1];
  }
}
