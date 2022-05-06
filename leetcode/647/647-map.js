/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let shortMap, longMap;
    if (nums1.length < nums2.length) {
        shortMap = mapify(nums1);
        longMap = mapify(nums2);
    } else {
        shortMap = mapify(nums2);
        longMap = mapify(nums1);
    }
    return findIntersection(shortMap, longMap);
};

function findIntersection(shortMap, longMap) {
    let intersection = [];
    
    for (let num in shortMap) {
        const shortCount = shortMap[num],
              longCount = longMap[num];
        if (shortCount && longCount) {
            const intersectionCount = Math.min(shortCount, longCount);
            for (let i = 0; i < intersectionCount; i++) {
                intersection.push(num);
            }
        }
    }
    
    return intersection;
}

function mapify(nums) {
    const map = {};
    for (let num of nums) {
        let count = map[num];
        if (count) {
            count++;
        } else {
            count = 1;
        }
        map[num] = count;
    }
    return map;
}
