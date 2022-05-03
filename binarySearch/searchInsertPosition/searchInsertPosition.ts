/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

// O(log n) time, O(1) space
function searchInsert(nums: number[], target: number): number {
    let start = 0, 
        end = nums.length;
    
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        let current = nums[mid];
        if (current === target) {
            return middle;
        }
        else if (current < target) {
            start = middle + 1;
        }
        else if (current > target) {
            end = middle;
        }
    }
    
    return start;
};
