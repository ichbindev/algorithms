/*
Given an array of numbers sorted in ascending order, find the element 
in the array that has the minimum difference with the given ‘key’.
*/

class Solution {
  searchMinDiffElement(arr, key) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] > key) {
        end = mid - 1;
      } else if (arr[mid] < key) {
        start = mid + 1;
      } else {
        return arr[mid];
      }
    }

    const d1 = Math.abs(arr[start] - key) || Infinity,
          d2 = Math.abs(key - arr[end]) || Infinity;
    return d1 < d2 ? arr[start] : arr[end];
  }
}
