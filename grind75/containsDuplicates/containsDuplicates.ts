/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/*
Runtime: 66 ms, faster than 99.91% of TypeScript online submissions for Contains Duplicate.
Memory Usage: 51.9 MB, less than 16.85% of TypeScript online submissions for Contains Duplicate.
*/

// O(n) time, O(n) space
function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set();
  for (let num of nums) {
      if (numSet.has(num)) {
          return true;
      }
      numSet.add(num);
  }
  return false;
};