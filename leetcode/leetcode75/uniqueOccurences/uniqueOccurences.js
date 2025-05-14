/*
    Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const occurrences = new Map();
  for (const n of arr) {
      const count = occurrences.get(n) || 0;
      occurrences.set(n, count + 1);
  }

  // // alternate solution, a little cleaner but doesn't short circuit
  // const counts = new Set(occurrences.values());
  // return occurrences.size === counts.size;

  const counts = new Set();
  for (const v of occurrences.values()) {
      if (counts.has(v)) return false;
      counts.add(v);
  }
  return true;
};