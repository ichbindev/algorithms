/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0,
        maxLength = 0,
        flipped = 0;

    for (let end = 0; end < nums.length; end++) {
        // grow
        if (nums[end] === 0) flipped++;
        // shrink
        while (flipped > k) {
            if (nums[start] === 0) flipped--;
            start++;
        }
        // check
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};