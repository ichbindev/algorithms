/*
Given an array of numbers sorted in ascending order, find the range of 
a given number ‘key’. The range of the ‘key’ will be the first and last 
position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not 
present return [-1, -1].

Constraints:
- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- nums is a non-decreasing array.
- -10^9 <= target <= 10^9
*/

class Solution {

  findRange(arr, key) {
    if (arr[0] > key || arr[arr.length - 1] < key) return [-1, -1];
    const start = this.findStart(arr, key);
    const end = this.findEnd(arr, key);
    return start <= end? [start, end] : [-1, -1];
  }

  findStart(arr, key) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] >= key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }

  findEnd(arr, key) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] <= key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return end;
  }
}
