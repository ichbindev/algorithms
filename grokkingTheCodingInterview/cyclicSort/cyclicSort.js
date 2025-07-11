/*
We are given an array containing n objects. Each object, 
when created, was assigned a unique number from the range 
1 to n based on their creation sequence. This means that 
the object with sequence number 3 was created just before 
the object with sequence number 4.

Write a function to sort the objects in-place on their 
creation sequence number in  without using any extra space. 
For simplicity, let’s assume we are passed an integer array 
containing only the sequence numbers, though each number is 
actually an object.
*/

class Solution {
  sort(nums) {
    let i = 0;
    while (i < nums.length) {
      const num = nums[i];
      if (num !== i + 1) {
        [nums[num - 1], nums[i]] = [nums[i], nums[num - 1]];
      } else {
        i++;
      }
    }
    return nums;
  }
}
