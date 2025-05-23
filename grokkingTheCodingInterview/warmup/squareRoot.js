/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/
class Solution {
  mySqrt(x) {
    if (x < 2) return x;
    
    let bottom = 2;
    let top = Math.floor(x / 2);
    while (top >= bottom) {
      const middle = Math.floor(bottom + (top - bottom) / 2);
      const square = middle * middle;
      if (square > x) {
        top = middle - 1;
      } else if (square < x) {
        bottom = middle + 1;
      } else {
        return middle;
      }
    }
    return top; 
  };
}
