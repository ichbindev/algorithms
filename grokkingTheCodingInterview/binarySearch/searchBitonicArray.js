/*
Given a Bitonic array, find if a given ‘key’ is present in it. An 
array is considered bitonic if it is first monotonically increasing 
and then monotonically decreasing.

In other words, a bitonic array starts with a sequence of increasing 
elements, reaches a peak element, and then follows with a sequence 
of decreasing elements. The peak element is the maximum value in the 
array.

Write a function to return the index of the ‘key’. If the 'key' appears 
more than once, return the smaller index. If the ‘key’ is not present, 
return -1.
*/

class Solution {
  search(arr, key) {
    // find the peak
    const mid = this.findMiddle(arr);

    // find index in subarray, if exists
    const left = this.binarySearch(arr.slice(0, mid + 1), key);
    const right = this.binarySearch(arr.slice(mid), key) + mid;

    // prefer the lower index
    return left !== -1 ? left : right;
  }

  binarySearch(arr, key) {
    let start = 0,
        end = arr.length - 1;

    const comp = arr[start] < arr[end] ?
                   (a, b) => a - b:
                   (a, b) => b - a;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] === key) {
        return mid;
      } else if (comp(arr[mid], key)) {
        end = mid - 1;
      } else {
        start = start + 1;
      }
    }
    return -1;
  }

  findMiddle(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] < arr[mid + 1]) {
        start = mid + 1;
      } else if (arr[mid] > arr[mid + 1]) {
        end = mid;
      }
    }

    return start;
  }
}
