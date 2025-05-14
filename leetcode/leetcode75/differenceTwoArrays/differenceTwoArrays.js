/*
    Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
    Note that the integers in the lists may be returned in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  // // first pass, using set/array constructors and methods
  // const set1 = new Set(nums1);
  // const set2 = new Set(nums2);
  // const uniqueTo1 = Array.from(set1.difference(set2));
  // const uniqueTo2 = Array.from(set2.difference(set1));
  // return [uniqueTo1, uniqueTo2];

  // second pass, doing above manually
  const set1 = new Set();
  const set2 = new Set();
  nums1.forEach(num => set1.add(num));
  nums2.forEach(num => set2.add(num));
  const uniqueTo1 = findUnique(set1, set2);
  const uniqueTo2 = findUnique(set2, set1);
  return [uniqueTo1, uniqueTo2];
};

function findUnique(set1, set2) {
  const unique = [];
  for (const n of set1) {
      if (!set2.has(n)) {
          unique.push(n);
      }
  }
  return unique;
};