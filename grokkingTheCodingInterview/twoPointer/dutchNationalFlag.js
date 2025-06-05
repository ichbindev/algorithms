/*
Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, hence, we can’t 
count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; 
and since our input array also consists of three different numbers that is 
why it is called Dutch National Flag problem.
*/
class Solution {
  sort(arr) {
    // keep track of the next placement
    let placeNext = 0;
    // swap 0s with place next and increment, then do the same for 1s
    // 2s will already be at end so no need to iterate
    for (let searchFor = 0; searchFor <= 1; searchFor++) {
      for (let current = placeNext; current < arr.length; current++) {
        if (arr[current] === searchFor) {
          [arr[current], arr[placeNext]] = [arr[placeNext], arr[current]];
          placeNext++;
        }
      }
    }
    return arr
  }
}
