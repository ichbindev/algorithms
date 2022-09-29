/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

/*
Runtime: 81 ms, faster than 90.20% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 44.2 MB, less than 31.70% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
*/

// O(n) where n is size of numbers array
function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
      right = numbers.length - 1,
      total = numbers[left] + numbers[right];
  
  // use that the array is sorted to make a two pointer solution
  // increase left pointer if the sum is too low
  // decrease right pointer if too high
  while (total !== target) {
      if (total < target) {
          ++left;
      } else {
          --right;
      }
      total = numbers[left] + numbers[right];
  }
  
  // solution is not zero indexed for some reason
  return [left + 1, right + 1];
};