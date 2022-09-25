/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/*
Runtime: 105 ms, faster than 69.06% of TypeScript online submissions for Majority Element.
Memory Usage: 45.4 MB, less than 87.27% of TypeScript online submissions for Majority Element.
*/

/*
The main idea behind this algorithm is that if an item is the majority element, it will be
the majority element in a subset of the array. So we pick a candidate, iterate through the array,
and if we hit a point where it's not a majority element (count is break even) we discard the c
candidate and pick a new one. Eventually we'll hit a contiguous pocket where the majority element
is the most common
*/
function majorityElement(nums: number[]): number {
  let count = 1;
  let candidate = nums[0];
  
  for (let i = 1; i < nums.length; ++i) {
      // if count = 0, pick a new candidate
      if (count === 0) {
          candidate = nums[i];
      }
      
      // increase count if we match the cnadidate
      // decrease if we don't
      nums[i] === candidate ? ++count : --count;
  }
  
  return candidate;
};