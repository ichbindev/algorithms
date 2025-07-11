/*
We are given an unsorted array containing numbers 
taken from the range 1 to ‘n’. The array can have 
duplicates, which means some numbers will be missing. 

Find all those missing numbers.
*/

class Solution {
  findNumbers(nums) {
    let missingNums = [],
    i = 0;
     
    while (i < nums.length) {
      let placeAtIdx = nums[i] - 1;
      if (nums[i] !== nums[placeAtIdx]) {
        [nums[i], nums[placeAtIdx]] = [nums[placeAtIdx], nums[i]];
      } else {
        i++;
      }
    }

    for (let x = 1; x <= nums.length; x++) {
      if (nums[x - 1] !== x) missingNums.push(x); 
    }
    
    return missingNums;
  }
}
