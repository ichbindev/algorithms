/*
Given an array of numbers which is sorted in ascending order and also 
rotated by some arbitrary number, find if a given ‘key’ is present in 
it.

Write a function to return the index of the ‘key’ in the rotated array. 
If the ‘key’ is not present, return -1. You can assume that the given 
array does not have any duplicates.

Note: You need to solve the problem in  O(logn) time complexity.

Constraints:
- 1 <= arr.length <= 5000
- -10^4 <= arr[i] <= 10^4
- All values of nums are unique.
- arr is an ascending array that is possibly rotated.
- -10^4 <= key <= 10^4
*/

class Solution {
  search(arr, key) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] === key) return mid;

      if (arr[start] <= arr[mid]) { // start -> mid is ascending
        if (key >= arr[start] && key < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else { // mid -> end is ascending
        if (key > arr[mid] && key <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
      
    }
    
    return -1;
  }
}
