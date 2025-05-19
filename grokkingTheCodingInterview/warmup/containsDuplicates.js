/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

class Solution {
  containsDuplicate(nums) {
    let set = new Set();
    for (const num of nums) {
      if (set.has(num)) return true;
      set.add(num);
    }
    return false;
  }
}
