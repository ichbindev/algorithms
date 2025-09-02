/*
Find the maximum value in a given Bitonic array. An array is considered 
bitonic if it is first monotonically increasing and then monotonically decreasing.

In other words, a bitonic array starts with a sequence of increasing elements, 
reaches a peak element, and then follows with a sequence of decreasing elements. 
The peak element is the maximum value in the array.

Constraints:
- 1 <= arr.length <= 10^5
- -10^5 <= arr[i] <= 10^5
*/

class Solution {
  findMax(arr) {
    if (arr.length === 1) return arr[0];
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (
          arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1] ||
          mid === 0 && arr[mid] > arr[mid + 1] || 
          mid === arr.length - 1 && arr[mid] > arr[mid - 1] 
         ) { // peak
        return arr[mid];
      } else if (arr[mid] < arr[mid + 1]) { // increasing
        start = mid + 1;
      } else if (arr[mid] < arr[mid - 1]) { // decreasing
        end = mid - 1;
      }
    }
    return start;
  }

}
