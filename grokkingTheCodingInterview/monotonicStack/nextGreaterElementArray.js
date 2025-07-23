/*
Given two integer arrays nums1 and nums2, return an array 
answer such that answer[i] is the next greater number for 
every nums1[i] in nums2.

The next greater element for an element x is the first 
element to the right of x that is greater than x. If there 
is no greater number, output -1 for that number.

The numbers in nums1 are all present in nums2.
*/

class Solution {
  nextGreaterElement(nums1, nums2) {
    // process nums2, find next greater element for every n
    // and store solution in map
    const map = {}, stack = []; // monotonically decreasing stack
    for (const n of nums2) {
      while (stack.length && stack[stack.length - 1] < n) {
        const top = stack.pop();
        map[top] = n;
      }
      stack.push(n);
    }
    
    // for each nums1, look up answer in map
    // if it was still in stack, nothing was greater
    // so it's not in map, return -1
    const answer = nums1.map(n => map[n] || -1);
    return answer;
  }
}
