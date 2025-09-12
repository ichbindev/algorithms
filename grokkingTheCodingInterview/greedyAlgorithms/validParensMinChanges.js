/*
Given a string str containing '(' and ')' characters, find the minimum number of 
parentheses that need to be added to a string of parentheses to make it valid.

A valid string of parentheses is one where each opening parenthesis '(' has a 
corresponding closing parenthesis ')' and vice versa. The goal is to determine 
the least amount of additions needed to achieve this balance.

Constraints:
- 1 <= s.length <= 1000
- s[i] is either '(' or ')'.
*/

class Solution {
    minAddToMakeValid(str) {
        let count = 0,
            needed = 0;

        for (const c of str) {
            if (c === '(') count++;
            else if (c === ')') count--;

            if (count === -1) {
                ++needed;
                count = 0;
            }
        }

        needed += count;
        return needed;  
    }
}

