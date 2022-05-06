// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) { 
    // make a copy of the array
    let originalArray = [...nums];
    
    // overwrite the original array with 'rotated' values
    for (let i = 0; i < nums.length; i++) {
        const replaceIndex = (i + k) % nums.length;
        nums[replaceIndex] = originalArray[i];
    }
};

