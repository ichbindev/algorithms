/*
Given a stack, sort it using only stack operations (push and pop).

You can use an additional temporary stack, but you may not copy the 
elements into any other data structure (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top.


*/

class Solution {
  sortStack(stack) {
    let tempStack = [];
    while (stack.length) {
      const temp = stack.pop();
      while (tempStack.length && tempStack[tempStack.length - 1] < temp) {
        stack.push(tempStack.pop());
      }
      tempStack.push(temp);
    }

    // temp stack is sorted in ascending order
    while (tempStack.length) {
      stack.push(tempStack.pop());
    }
    return stack;
  }
}
