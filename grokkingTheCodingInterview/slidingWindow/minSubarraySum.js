/*
Given an array of positive integers and a number ‘S,’ 
find the length of the smallest contiguous subarray whose 
sum is greater than or equal to 'S'. Return 0 if no such 
subarray exists.
*/

class Solution {
  findMinSubArray(s, arr) {
    let minLength = Infinity,
        start = 0,
        sum = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
      while (sum >= s) {
        minLength = Math.min(minLength, end - start + 1);
        sum -= arr[start];
        start++;
      }
    }
    return minLength !== Infinity ? minLength : 0;
  };
}
