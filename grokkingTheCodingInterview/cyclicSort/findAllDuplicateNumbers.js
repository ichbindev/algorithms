/*
We are given an unsorted array containing n numbers 
taken from the range 1 to n. The array has some numbers 
appearing twice, find all these duplicate numbers using 
constant space.
*/

class Solution {
  findNumbers(nums) {
    let i = 0;

    while (i < nums.length) {
      const placeAt = nums[i] - 1;
      if (nums[i] !== nums[placeAt]) {
        [nums[i], nums[placeAt]] = [nums[placeAt], nums[i]];
      } else {
        i++;
      }
    }

    const duplicates = nums.reduce((a, c, i) => {
      if (c !== i + 1) a.push(c);
      return a;
    }, []);

    return duplicates;
  }
}
