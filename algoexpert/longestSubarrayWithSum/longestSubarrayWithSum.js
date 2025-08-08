function longestSubarrayWithSum(array, targetSum) {
  let start = 0,
      sum = 0,
      result = [];
  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    while (sum > targetSum) {
      sum -= array[start];
      start++;
    }
    if (sum === targetSum) {
      const currentLength = end - start + 1;
      const storedLength = result[1] - result[0] + 1 || 0;
      if (currentLength > storedLength) result = [start, end];
    }
  }
  return result;
}

// Do not edit the line below.
exports.longestSubarrayWithSum = longestSubarrayWithSum;
