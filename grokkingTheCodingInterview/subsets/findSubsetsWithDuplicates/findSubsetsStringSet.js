class Solution {
  findSubsets(nums) {
    const subsets = new Set(['']);

    for (const num of nums) {
      const currentLength = subsets.size;
      for (const subset of Array.from(subsets).slice(0, currentLength)) {
        subsets.add(subset + num);
      }
    }
    
    const result = Array.from(subsets).map(s => s.split('').map(n => +n));
    return result;
  }
}
