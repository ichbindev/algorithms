/*
Given a string, write a function that uses a stack  to 
reverse the string. The function should return the reversed string.
*/
class Solution {
    reverseString(s) {
        const stack = [];
        for (const c of s) {
            stack.push(c);
        }
        const reversed = [];
        while (stack.length !== 0) {
            reversed.push(stack.pop());
        }
        return reversed.join('');
    }
}
