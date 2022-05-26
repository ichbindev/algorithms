function threeSum(nums: number[]): number[][] {
  // sort the numbers for two pointer solution
  nums.sort((a, b) => a - b);
  
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
      // skip duplicate numbers to avoid duplicate triplets
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      
      let left = i + 1,
          right = nums.length - 1,
          target = 0 - nums[i];
      
      // point at beginning and end, adjust as needed
      // if we're under target, increase the lower number
      // if we're above target, decrease the higher number
      while (left < right) {
          const current = nums[left] + nums[right];
          
          if (current > target) {
              --right;
          } else if (current < target) {
              ++left;
          } else {
              const triplet = [nums[i], nums[left], nums[right]];
              result.push(triplet);
              ++left;
              --right;
              
              // avoid duplicates some more
              while (left < right && nums[left] === nums[left - 1]) {
                  ++left;
              }
              while (left < right && nums[right] === nums[right + 1]) {
                  --right;
              }
          }
      }
  }
  
  return result;
};