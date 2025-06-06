/*
Given an array of unsorted numbers and a target number, 
find all unique quadruplets in it, whose sum is equal to the target number.
*/
class Solution {
  searchQuadruplets(arr, target) {
    const quadruplets = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 3; i++) {
      // avoid duplicates by considering only the first of the same number
      if (i && arr[i] === arr[i - 1]) continue;

      for (let j = i + 1; j < arr.length - 2; j++) {
        // more dupe skipping
        if (j > i + 1 && arr[j] === arr[j - 1]) continue;

        // twoSum two pointer solution
        let left = j + 1,
            right = arr.length - 1;
        while (left < right) {
          const sum = arr[i] + arr[j] + arr[left] + arr[right];
          if (sum < target) {
            left++;
          } else if (sum > target) {
            right--;
          } else { // sum === target
            quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
            left++;
            right--;
            
            // even more dup avoidance
            while (left < arr.length && arr[left] === arr[left - 1]) {
              left++;
            }
            while (right > j && arr[right] === arr[right + 1]) {
              right--;
            }
          }
        }
      }
    }
    return quadruplets;
  }
}
