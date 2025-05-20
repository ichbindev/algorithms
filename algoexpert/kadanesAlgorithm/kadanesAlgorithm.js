/*
  Write a function that takes in a non-empty array of integers and returns the
  maximum sum that can be obtained by summing up all of the integers in a
  non-empty subarray of the input array. A subarray must only contain adjacent
  numbers (numbers next to each other in the input array).
*/
function kadanesAlgorithm(array) {
  let current = array[0], 
      max = current;
  for (const num of array.slice(1)) {
    current = Math.max(num, current + num);
    max = Math.max(max, current);
  }
  return max;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
