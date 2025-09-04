/*
Given an array of numbers which is sorted in ascending order and 
is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates.

Note: You need to solve the problem in O(logn) time complexity.

Constraints:
- 1 <= arr.length <= 5000
- -10^4 <= arr[i] <= 10^4
- All values of nums are unique.
- arr is an ascending array that is possibly rotated.
*/

class Solution {

  countRotations(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      } else {
        if (arr[start] > arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
    return 0;
  }
}
