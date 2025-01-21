/*
Give    t i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // keep track of two things:
  // smallest: the smallest element we've seen
  // middleCandidate: the smallest element greater than a previous element
  // if we find one larger than both, we have a valid triplet of
  // [smallest', middleCandidate, n], where smallest' is the smallest value 
  // visited up to that point in the array
  let smallest = Number.MAX_SAFE_INTEGER;
  let middleCandidate = Number.MAX_SAFE_INTEGER;
  for (let n of nums) {
      if (n <= smallest) {
          smallest = n;
      } else if (n <= middleCandidate) {
          middleCandidate = n;
      } else {
          return true;
      }
  }
  return false;
};
