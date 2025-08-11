/*
You are given a string s and an integer k. Your task 
is to remove groups of identical, consecutive characters 
from the string such that each group has exactly k characters. 
The removal of groups should continue until it's no longer possible 
to make any more removals. The result should be the final version of 
the string after all possible removals have been made.
*/

class Character {
  constructor(char) {
    this.char = char;
    this.count = 1;
  }

  inc() {
    this.count++;
  }

  meets(k) {
    return this.count === k;
  }

  toString() {
    const { char, count } = this;
    return char.repeat(count);
  }
}

class Solution {
  removeDuplicates(s, k) {
    const stack = [];

    for (const c of s) {
      const top = stack[stack.length - 1];
      if (top?.char === c) {
        top.inc();
        if (top.meets(k)) stack.pop();
      } else {        
        stack.push(new Character(c));
      }
    }

    return this.buildStringFromStack(stack);
  }

  buildStringFromStack(stack) {
    let res = '';
    for (const char of stack) {
      res += char;
    }
    return res;
  }
}