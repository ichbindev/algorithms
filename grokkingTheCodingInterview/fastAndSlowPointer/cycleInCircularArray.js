/*
We are given an array containing positive and negative numbers. 
Suppose the array contains a number ‘M’ at a particular index. 
Now, if ‘M’ is positive we will move forward ‘M’ indices and if 
‘M’ is negative move backwards ‘M’ indices. You should assume 
that the array is circular which means two things:

If, while moving forward, we reach the end of the array, 
we will jump to the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, 
we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The 
cycle should have more than one element and should follow 
one direction which means the cycle should not contain both 
forward and backward movements.
*/
class Solution {
  loopExists(arr) {
    // need to start from every index to check for cycle
    for (const i of arr.keys()) {
      if (this.hasCycle(arr, i)) return true;
    }
    return false;
  }

  advance(arr, i, d) {
    // calc next index and direction, wrap if out of bounds
    let nextIndex = (i + arr[i]) % arr.length, 
        direction = arr[i] >= 0;
    if (nextIndex < 0) nextIndex += arr.length; 

    // change in direction, single index cycle, and an
    // already broken cycle are the failure cases 
    if (d !== direction || nextIndex === i || i === -1) {
      return -1;
    }

    return nextIndex;
  }

  hasCycle(arr, i) {
    const direction = arr[i] >= 0;
    let fast = i, 
        slow = i;

    // find cycle with slow and fast pointer strategy
    do {
      slow = this.advance(arr, slow, direction);
      fast = this.advance(arr, fast, direction);
      fast = this.advance(arr, fast, direction);
    } while (slow !== -1 && fast !== -1 && slow !== fast);

    // check why it broke out
    // index of -1 is failure case for both
    return fast !== -1 && slow === fast;
  }
}
