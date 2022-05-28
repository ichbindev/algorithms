/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
*/
function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
        right = nums.length - 1;
    
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum < target) {
        // since we're under target and ever element between left and right is
        // less than right, add all of them to the count before moving on 
        count += right - left;
        ++left;
      } else { // current sum is too big
        --right;
      }
    }
  }

  return count;
}