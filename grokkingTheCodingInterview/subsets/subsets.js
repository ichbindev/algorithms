/*
Given a set with distinct elements, find all of its distinct subsets.

Constraints:
- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All the numbers of nums are unique.
*/

class Solution {
  findSubsets(nums) {
    const subsets = [[]];
    for (const num of nums) {
      const numSubsets = subsets.length;
      for (const subset of subsets.slice(0, numSubsets)) {
        subsets.push([...subset, num]);
      }

    }
    return subsets;
  }
}
