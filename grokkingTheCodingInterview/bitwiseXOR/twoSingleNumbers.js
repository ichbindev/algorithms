/*
In a non-empty array of numbers, every number appears exactly twice except 
two numbers that appear only once. Find the two numbers that appear only once.

Constraints:
- 1 <= nums.length <= 3 * 10^4
- -3 * 10^4 <= nums[i] <= 3 * 10^4
- Each element in the array appears twice except for two element which 
    appears only once.
*/

class Solution {
  findSingleNumbers(nums) {
    const { xorAll } = this;
    let XORed = xorAll(nums);
    // XORed = [n1, n2] => n1 ^ n2
    // bits of n1 and n2 will be same at 0s and different at 1s
    // find bit where different, then split nums into 2 groups
    // those that share that 1 and those that don't
    // now we have two sets of numbers that are all duplicates except for one
    // which is a problem we previously solved by XORing all the numbers
    let setBit = 1;
    while ((XORed & setBit) === 0) {
      setBit <<= 1;
    }

    const hasBit = [],
          noBit = [];
    for (const num of nums) {
      if (num & setBit) hasBit.push(num);
      else noBit.push(num);
    }

    return [xorAll(hasBit), xorAll(noBit)];
  }

  xorAll(nums) {
    return nums.reduce((a, c) => a ^= c);
  }

  findSingleNumbersWithMap(nums) {
    const map = {};
    for (const n of nums) {
      if (!(n in map)) map[n] = 1;
      else delete map[n];
    }
    return Object.keys(map).map(x => +x);
  }
}
