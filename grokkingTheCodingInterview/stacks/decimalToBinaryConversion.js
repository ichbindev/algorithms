/*
Given a positive integer n, write a function that 
returns its binary equivalent as a string. The function 
should not use any in-built binary conversion function.
*/
class Solution {
decimalToBinary(num) {
    const stack = [];
    while (num > 0) {
        const remainder = num % 2;
        stack.push(remainder);
        num = Math.floor(num / 2);
    }
    // return stack.reverse().join('');
    const result = [];
    while (stack.length) {
        result.push(stack.pop());
    }
    return result.join('');
}
}