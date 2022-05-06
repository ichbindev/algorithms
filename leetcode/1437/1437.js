/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    // count the 0s between 1s
    let zeroes = 0;
    const start = nums.indexOf(1) + 1;
    for (let i = start; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (zeroes < k) {
                return false;
            }
            zeroes = 0;
        } else {
            zeroes++;
        }
    }
    return true;
    
    // track the index of the last encountered 1
    let last1 = nums.indexOf(1);
    for (let i = last1 + 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            // check the number of 0s since the last 1 seen
            if (i - last1 - 1 < k) {
                return false;
            }
            last1 = i;
        }
    }
    return true;
};
