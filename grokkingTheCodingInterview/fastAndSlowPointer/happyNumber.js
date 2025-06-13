/*
Any number will be called a happy number if, after repeatedly 
replacing it with a number equal to the sum of the square of all 
of its digits, leads us to the number 1. All other (not-happy) 
numbers will never reach 1. Instead, they will be stuck in a cycle 
of numbers that does not include 1.

Given a positive number n, return true if it is a happy number otherwise return false.
*/

class Solution {
  find(num) {
    let fast = num, slow = num;

    do {
      slow = this.getDigitSquareSum(slow);
      fast = this.getDigitSquareSum(fast);
      fast = this.getDigitSquareSum(fast);
    } while (fast !== slow)

    return slow === 1;
  }

  getDigitSquareSum(num) {
    return num.toString().split('').reduce((a, c) => a + Math.pow(c, 2), 0);
  }
}
