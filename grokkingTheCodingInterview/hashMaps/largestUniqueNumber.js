/*
Given an array of integers, identify the highest 
value that appears only once in the array. If no 
such number exists, return -1.

-- 1 <= nums.length <= 2000
-- 0 <= nums[i] <= 1000
*/
class Solution {
  largestUniqueNumber(arr) {
    const map = arr.reduce((a, c) => {
      a[c] = a[c] + 1 || 1;
      return a;
    }, {});

    const uniqueNums = Object.keys(map).filter((k) => map[k] === 1);

    return uniqueNums.length ? Math.max(...uniqueNums) : -1;
  }
}
