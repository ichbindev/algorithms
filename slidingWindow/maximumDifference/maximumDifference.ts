/*
Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1.
*/
function maximumDifference(nums: number[]): number {
    let min = nums[0],
          maxDiff = -1;
    nums.forEach(num => {
        maxDiff = Math.max(maxDiff, num - min);
        min = Math.min(min, num);
    });
    return maxDiff === 0 ? -1 : maxDiff;
};
