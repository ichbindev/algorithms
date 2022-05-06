/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums: number[]): number {
    let count = 0,
        candidate: number;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        nums[i] === candidate ? ++count : --count;
    }
    return candidate;
};
