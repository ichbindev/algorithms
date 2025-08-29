/*
Given an array of numbers sorted in an ascending order, find the ceiling 
of a given number ‘key’. The ceiling of the ‘key’ will be the smallest 
element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there 
isn’t any ceiling return -1.

Constraints:
- 1 <= arr.length <= 10^4
- -10^4 < arr[i], key < 10^4
- Given array contains distinct values sorted in ascending order.
*/

class Solution {
  searchCeilingOfANumber(arr, key) {
    let start = 0,
        end = arr.length - 1;

    if (arr[end] < key) return -1;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2),
            val = arr[mid];
      if (val === key) {
        return mid;
      } else if (val > key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    
    return start;
  }
}
