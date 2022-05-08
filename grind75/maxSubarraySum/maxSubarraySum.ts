function maxSubArray(nums: number[]): number {
  let maxSubarraySum = -Infinity,
      currentSum = 0;
  
  nums.forEach(num => {
      currentSum = Math.max(currentSum + num, num);
      maxSubarraySum = Math.max(maxSubarraySum, currentSum);
  });
  
  return maxSubarraySum;
};