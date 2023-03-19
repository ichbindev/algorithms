export function zeroSumSubarray(nums: number[]) {
  const previousSums = new Set();
  let sum = 0;
  
  for (let num of nums) {
    previousSums.add(sum);
    sum += num;

    if (previousSums.has(sum)) return true;
  }
  
  return false;
}
