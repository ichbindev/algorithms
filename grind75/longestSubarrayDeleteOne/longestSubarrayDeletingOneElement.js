/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 
1's in the resulting array. Return 0 if there is no such subarray.

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = 0,
        deleted = 0,
        maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        // grow
        if (nums[end] === 0) {
            deleted++;
        }
        // shrink
        while (deleted > 1) {
            if (nums[start] === 0) deleted--;
            start++;
        }
        // check
        maxLength = Math.max(end - start, maxLength);
    }
    return maxLength;
};