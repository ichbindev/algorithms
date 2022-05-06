// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) { 
    // data fixing to make sure k is in the array
    k %= nums.length;
    // done by reversing the list three times with k as the pivot
    // flip the whole array
    reverse(nums, 0, nums.length - 1);
    // flip the first k elements
    reverse(nums, 0, k - 1);
    // flip the rest of the array
    reverse(nums, k, nums.length - 1);
};

// reverses the array in place without creating a new array
function reverse(nums, begin, end) {
    while (begin < end) {
        
        // this is cool but testing revealed it's a little slower and uses more memory
        // [nums[begin], nums[end]] = [nums[end], nums[begin]];
        
        const temp = nums[begin];
        nums[begin] = nums[end];
        nums[end] = temp;
        
        begin++;
        end--;
    };
}
