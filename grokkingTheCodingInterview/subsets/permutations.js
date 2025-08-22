/*
Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. 
For example, {1, 2, 3} has the following six permutations:
{1, 2, 3} {1, 3, 2} {2, 1, 3} {2, 3, 1} {3, 1, 2} {3, 2, 1}

If a set has  distinct elements it will have  permutations.

Constraints:
- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the numbers of nums are unique.
*/
class Solution {

  findPermutations(nums) {
    let result = [];
    this.permutate([], nums, result)
    return result;
  }

  permutate(current, toUse, result) {
    console.log(toUse)
    if (toUse.length === 0) {
      result.push([...current]);
    }
    for (let i = 0; i < toUse.length; i++) {
      current.push(toUse[i]);
      toUse.splice(i, 1);
      this.permutate(current, toUse, result);
      toUse.splice(i, 0, current.pop());
    }
  }
}
