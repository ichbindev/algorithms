/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // find the rotation point and return the smallest number
    // this is O(n), could be improved to O(logn) if 
    // performance is critical or lists are very large 
    let number = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            number = nums[i + 1];
            break;
        }
    }
    return number;
};
