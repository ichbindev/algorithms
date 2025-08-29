/*
Given a sorted array of numbers, find if a given number ‘key’ 
is present in the array. Though we know that the array is sorted, 
we don’t know if it’s sorted in ascending or descending order. You 
should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present 
in the array, otherwise return -1.

Constraints:
1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
*/

class Solution {
  search(arr, key) {
    let start = 0,
        end = arr.length - 1;
    const comp = (a, b) => {
      if (arr[start] < arr[end]) {
        return a < b;
      }
      return a > b;
    };

    
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2),
            val = arr[mid];
            
      if (val === key) {
        return mid;
      } else if (comp(val, key)) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }
}
