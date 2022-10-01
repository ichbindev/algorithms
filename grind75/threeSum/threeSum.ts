/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
Runtime: 150 ms, faster than 94.36% of TypeScript online submissions for 3Sum.
Memory Usage: 53.8 MB, less than 41.47% of TypeScript online submissions for 3Sum.
*/

// O(n^2), sorts and loops full array n times
function threeSum(nums: number[]): number[][] {
  // sort the numbers for two pointer solution
  nums = nums.sort((a, b) => a - b);
  
  // initialize result array
  const result: number[][] = []
  
  // iterate thru sorted array
  for (let i = 0; i < nums.length - 2; ++i) {
      
      // skip duplicate numbers to avoid duplicate triplets
      if (i > 0 && nums[i] === nums[i -1]) {
          continue;
      }
      
      // initialize vars for a two pointer solution
      let left = i + 1,
          right = nums.length - 1,
          target = 0 - nums[i];
      
      // point at beginning and end, adjust as needed
      // if we're under target, increase the lower number
      // if we're above target, decrease the higher number
      // if we hit target, add to array and update pointers avoiding duplicates
      while (left < right) {
          const total = nums[left] + nums[right];
          if (total < target) {
              ++left;
          } else if (total > target) {
              --right;
          } else {
              result.push([nums[i], nums[left], nums[right]]);
              ++left;
              while (nums[left] === nums[left - 1] && left < right) {
                  ++left;
              }
          }
      }

  }
  
  return result;
};