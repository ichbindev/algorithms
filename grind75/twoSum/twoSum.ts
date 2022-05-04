/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
function twoSum(nums: number[], target: number): number[] {
    const seen: {[key: string]: number} = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i], 
              complement = target - num;
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }
        seen[num] = i;
    }
    
    return [-1, -1];
};
