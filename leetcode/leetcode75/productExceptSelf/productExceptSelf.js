/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = Array(nums.length).fill(1);
  multiplyLeftToRight(nums, result);
  multiplyRightToLeft(nums, result);
  return result; 
};

function multiplyLeftToRight(nums, result) {
   let product = 1;
   for (let i = 0; i < nums.length; i++) {
       result[i] = product;
       product *= nums[i];
   }
}

function multiplyRightToLeft(nums, result) {
   product = 1;
   for (let i = nums.length - 1; i >= 0; i--) {
       result[i] *= product;
       product *= nums[i];
   }
}