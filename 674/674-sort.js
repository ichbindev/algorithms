/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersection = [],
        pointer1 = 0,
        pointer2 = 0,
        comparator = (a, b) => a - b;
    nums1.sort(comparator);
    nums2.sort(comparator);
    
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        const num1 = nums1[pointer1], 
              num2 = nums2[pointer2];
        if (num1 === num2) {
            intersection.push(num1);
            pointer1++;
            pointer2++;
        } else if (num1 < num2) {
            pointer1++;
        } else {
            pointer2++;
        }
    }
    
    return intersection;
};
