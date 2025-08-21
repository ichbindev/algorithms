class Solution {
  findSubsets(nums) {
    nums.sort((a, b) => a - b);
    const subsets = [ [] ];
    let lastRange = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
      const currentLength = subsets.length,
            fullRange = [0, currentLength];

      const [start, end] = i && nums[i - 1] === nums[i] ? lastRange : fullRange;
      for (let j = start; j < end; j++) {
        subsets.push([...subsets[j], nums[i]]);
      }
      
      lastRange = [currentLength, subsets.length];
    }

    return subsets;
  }
}
