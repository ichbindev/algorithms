/*
Given an array nums with positive numbers and a positive 
integer target, return the count of contiguous subarrays 
whose product is less than the target number.
*/

class Solution {
  findSubarrays(nums, target) {
    if (target <= 1) return 0;
    let totalCount = 0,
        start = 0,
        product = 1;
    
    for (let end = 0; end < nums.length; end++) {
      product *= nums[end];
      while (product >= target && start < nums.length) {
        product /= nums[start];
        start++;
      }
      totalCount += end - start + 1;
    }
    
    return totalCount;
  }
}

