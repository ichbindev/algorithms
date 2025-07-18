/*
Given an array, print the Next Greater Element (NGE) for every element.

The Next Greater Element for an element x is the first greater element 
on the right side of x in the array.

Elements for which no greater element exist, consider the next greater 
element as -1.
*/

class Solution {
  nextLargerElement(arr) {
    const result = new Array(arr.length).fill(-1),
          stack = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      const current = arr[i]; 
      let top = stack[stack.length - 1];

      while (stack.length && top <= current) {
        stack.pop();
        top = stack[stack.length - 1];
      }
      
      if (stack.length) {
        result[i] = top;
      } 
      stack.push(current);
    }

    return result;
  }
}