class Solution {
  searchTriplet(arr, targetSum) {
    let closestSum = Infinity;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1, right = arr.length - 1;
      while (left < right) {
        const currentSum = arr[i] + arr[left] + arr[right];
        const currentDistance = Math.abs(targetSum - currentSum);
        const closestDistance = Math.abs(targetSum - closestSum);
        if (currentDistance <= closestDistance) {
          closestSum = currentDistance === closestDistance ? 
                                            Math.min(currentSum, closestSum) : 
                                            currentSum;
        }
        if (currentSum < targetSum) {
          left++;
        } else if (currentSum > targetSum) {
          right--;
        } else {
          return currentSum;
        }
      }
    }
    return closestSum;
  }
}
