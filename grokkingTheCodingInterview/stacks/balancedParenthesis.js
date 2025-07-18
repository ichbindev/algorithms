/*
Given a string s containing (, ), [, ], {, and } characters. 
Determine if a given string of parentheses is balanced.

A string of parentheses is considered balanced if every opening 
parenthesis has a corresponding closing parenthesis in the correct order.
*/

class Solution {
    isValid(s) {
        const stack = [];
        const match = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        for (let c of s) {
            if (c in match) {
                stack.push(c);
            } else {
                const top = stack.pop();
                if (!top || c !== match[top]) return false;
            }
        }
        return stack.length === 0;
    }
}