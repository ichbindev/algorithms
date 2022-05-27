/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/
function threeSumClosest(nums: number[], target: number): number {
  let closest = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);

  // sort the array and use two pointer solution
  for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1,
          right = nums.length - 1;
      
      // adjust pointers to get as close as possible to target
      while (left < right) {
          const current = nums[i] + nums[left] + nums[right];
          closest = calcClosestValue(closest, current, target);
          if (current < target) {
              ++left;
          } else if (current > target) {
              --right;
          } else {
              return target;
          }
      }
  }
  return closest;
};

// compare distance to target of closest found sum and current sum, return whichever is closer
function calcClosestValue(closest: number, current: number, target: number): number {
  const closestDiff = Math.abs(target - closest),
        currentDiff = Math.abs(target - current);
  if (closestDiff < currentDiff) {
      return closest;
  } else {
      return current;
  }
}
