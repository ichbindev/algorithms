/*
Given an array of numbers sorted in ascending order and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) 
such that they add up to the given target. If no such pair exists return [-1, -1].
*/
class Solution {
  search(arr, targetSum) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      } else {
        return [left, right];
      }
    }    
    return [-1, -1];
  }
}
