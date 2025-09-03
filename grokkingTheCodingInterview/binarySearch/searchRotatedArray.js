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
    const rot = arr.findIndex((e, i) => arr[i + 1] < e) + 1,
          len = arr.length;

    let start = 0,
        end = len - 1;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2),
            adjMid = (mid + rot) % len;

      if (arr[adjMid] < key) {
        start = mid + 1;
      } else if (arr[adjMid] > key) {
        end = mid - 1;
      } else {
        return adjMid;
      }
    }
    
    return -1;
  }
}
