/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
*/
class Solution {
  searchTriplets(arr) {
    const triplets = [];
    arr.sort((a, b) => a - b);
    for (const [i, num] of arr.entries()) {
      // avoid adding duplicates
      if (i > 0 && num === arr[i - 1]) {
        continue;
      }

      let left = i + 1,
          right = arr.length - 1;
      while (left < right) {
        const total = num + arr[left] + arr[right];
        if (total > 0) {
          right--;
        } else if (total < 0) {
          left++;
        } else {
          triplets.push([num, arr[left], arr[right]]);

          // more duplicate avoidance
          do {
            left++;
          } while (right > left && arr[left - 1] === arr[left]);
          do {
            right--;
          } while (right > left && arr[right + 1] === arr[right]);
        }
      }
    }
    return triplets;
  }

  searchTriplets2(arr) {
    const triplets = new Set();
    arr.sort((a, b) => a - b);
    for (const [i, num] of arr.entries()) {

      let left = i + 1,
          right = arr.length - 1;
      while (left < right) {
        const total = num + arr[left] + arr[right];
        if (total > 0) {
          right--;
        } else if (total < 0) {
          left++;
        } else {
          triplets.add(JSON.stringify([num, arr[left], arr[right]]));
          left++;
          right--;
        }
      }
    }
    return [...triplets].map(a => JSON.parse(a));
  }
}
