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
    let i = 0,
        placeZero = 0,
        placeTwo = arr.length - 1;
    while (i <= placeTwo) {
      const current = arr[i];
      if (current === 0) {
        [arr[i], arr[placeZero]] = [arr[placeZero], arr[i]];
        placeZero++;
        i++;
      } else if (arr[i] === 1) {
        i++;
      } else {
        [arr[i], arr[placeTwo]] = [arr[placeTwo], arr[i]];
        placeTwo--;
      }
    }
    return arr;
  }
  
  sortIntl(arr) {
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
