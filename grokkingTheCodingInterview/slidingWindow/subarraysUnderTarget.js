class Solution {
  findSubarrays(arr, target) {
    let results = [],
        start = 0,
        product = 1;z

    for (let end = 0; end < arr.length; end++) {
      product *= arr[end];

      while (product >= target && start < arr.length) {
        product /= arr[start];
        start++;
      }

      for (let newStart = start; newStart <= end; newStart++) {
        results.push(arr.slice(newStart, end + 1));
      }
    }
    
    return results;
  }
}
