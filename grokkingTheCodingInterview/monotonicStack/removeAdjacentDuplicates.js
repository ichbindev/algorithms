/*
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal letters 
and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been 
made.
*/

class Solution {
  removeDuplicates(s) {
    let stack = [];
    for (const c of s) {
      if (stack[stack.length - 1] === c) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.join('');
  }
}
