/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/
class Solution {
  numGoodPairs(nums) {
    const map = {};
    let pairCount = 0;
    for (let num of nums) {
      const currentCount = map[num] || 0;
      if (currentCount) pairCount += currentCount;
      map[num] = currentCount + 1;
    }
    return pairCount;
  }
}
