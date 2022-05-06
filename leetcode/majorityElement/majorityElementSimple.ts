/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums: number[]): number {
    const majority = nums.length / 2,
          counts: {[key:string]: number} = {};
    for (let num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        if (counts[num] > majority) {
            return num;
        }
    };
    return -1;
};
