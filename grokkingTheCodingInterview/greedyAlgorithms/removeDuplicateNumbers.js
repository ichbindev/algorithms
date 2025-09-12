/*
Given a string s, remove all duplicate letters from the input string while maintaining 
the original order of the letters.

Additionally, the returned string should be the smallest in lexicographical order among 
all possible results.

A string is in the smallest lexicographical order if it appears first in a dictionary. 
For example, "abc" is smaller than "acb" because "abc" comes first alphabetically.

Constraints:

- 1 <= s.length <= 10^4
- s consists of lowercase English letters.
*/

class Solution {
    removeDuplicateLetters(s) {
        // count & track
        const present = new Set(),
              stack = [],
              count = s.split('').reduce((a, c) => {
                    a[c] = a[c] + 1 || 1;
                    return a;
                }, {});

        // remove dupes - lexicographical order
        for (const c of s) {
            if (!present.has(c)) {
                let top = stack[stack.length - 1];
                while (stack.length && count[top] > 0 && top > c) {
                    stack.pop();
                    present.delete(top);
                    top = stack[stack.length - 1];
                }
                stack.push(c);
                present.add(c);
            }
            count[c]--;
        }

        return stack.join('');
    }
}
