/*
In a non-empty array of integers, every number appears twice except for 
one, find that single number.

Constraints:
- 1 <= nums.length <= 3 * 10^4
- -3 * 10^4 <= nums[i] <= 3 * 10^4
- Each element in the array appears twice except for one element which 
    appears only once.
*/

class Solution {
  findSingleNumber(arr) {
    // return arr.reduce((a, c) => c ^ a);
    let result = 0;
    for (const n of arr) {
      result ^= n;
    }
    return result;
  }
}
