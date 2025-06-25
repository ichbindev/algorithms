/*
Given an array containing 0s and 1s, if you are allowed 
to replace no more than ‘k’ 0s with 1s, find the length 
of the longest contiguous subarray having all 1s.
*/

class Solution {
  findLength(arr, k) {
    let maxLength = 0,
        start = 0,
        num0s = 0;

    for (const [end, num] of arr.entries()) {
      // grow window
      if (num === 0) num0s++;

      // shrink window
      while (num0s > k) {
        if (arr[start] === 0) num0s--;
        start++;
      }
      
      // check length
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  }
}
