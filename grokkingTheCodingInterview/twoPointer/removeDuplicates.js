/*
Given an array of sorted numbers, move all non-duplicate number 
instances at the beginning of the array in-place. The non-duplicate 
numbers should be sorted and you should not use any extra space so 
that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array 
and after moving return the length of the subarray that has no duplicate in it.
*/
class Solution {
  moveElements(arr) {
    let placeNext = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[placeNext - 1] !== arr[i]) {
        arr[placeNext] = arr[i];
        placeNext++;
      }
    }
    return placeNext;
  }
}
