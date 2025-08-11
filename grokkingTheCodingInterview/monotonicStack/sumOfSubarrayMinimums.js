/*
Given an array of integers arr, return the sum of the 
minimum values from all possible contiguous subarrays 
within arr. Since the result can be very large, return 
the final sum modulo (109 + 7).
*/

class Solution {
  sumSubarrayMins(arr) {
    const MOD = Math.pow(10, 9) + 7,
      peek = (s) => s[s.length - 1],
      stack = [];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
      const currentVal = i < arr.length ? arr[i] : 0;
      while (arr[peek(stack)] > currentVal) {
        const minIdx = stack.pop();
        const prevIdx = stack.length ? peek(stack) : -1;
        const totalCount = this.getTotalCount(minIdx, prevIdx, i);
        sum += arr[minIdx] * totalCount;
        sum %= MOD;
      }
      stack.push(i);
    }

    return sum;
  }

  getTotalCount(min, prev, curr) {
    const countStartIdx = curr - min,
      countEndIdx = min - prev;
    return countStartIdx * countEndIdx;
  }
}
