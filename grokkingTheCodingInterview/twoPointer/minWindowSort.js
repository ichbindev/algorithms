// Given an array, find the length of the smallest subarray 
// in it which when sorted will sort the whole array.
class Solution {
  sort(arr) {
    let left = 0,
        right = arr.length - 1;

    while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
      left++;
    }
    if (left === arr.length - 1) return 0;
    while (right > 0 && arr[right] >= arr[right - 1]) {
      right--;
    }

    let min = Infinity, max = -Infinity;
    for (let i = left; i <= right; i++) {
      min = Math.min(arr[i], min);
      max = Math.max(arr[i], max);
    }

    while (left > 0 && arr[left - 1] > min) {
      left--;
    }
    while (right < arr.length - 1 && arr[right + 1] < max) {
      right++;
    }

    return right - left + 1;
  }
}
