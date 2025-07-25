/*
Given a non-negative integer represented as a string 
num and an integer k, delete k digits from num to obtain 
the smallest possible integer. Return this minimum possible 
integer as a string.
*/

class Solution {
  removeKdigits(num, k) {
    // monotonic increasing stack
    let stack = [];
    for (const n of num.toString()) {
      while (stack[stack.length - 1] > n && k) {
        stack.pop();
        k--;
      }
      stack.push(n);
    }
    
    // pop last k remaining elements off stack if necessary
    if (k) stack = stack.slice(0, -k);

    // stringify & remove leading 0s
    const result = stack.join('').replace(/^0+/, ''); 
    return result || '0';
  }
}
