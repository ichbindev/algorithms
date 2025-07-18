/*
Given a stack, sort it using only stack operations (push and pop).

You can use an additional temporary stack, but you may not copy the 
elements into any other data structure (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top.


*/

class Solution {
  sortStack(stack) {
    let tempStack = [];
    while (stack.length) {
      let top = stack[stack.length - 1],
        tempTop = tempStack[tempStack.length - 1];
      if (!tempStack.length || top <= tempTop) {
        tempStack.push(stack.pop());
      } else {
        const stackTopTemp = stack.pop();
        top = stack[stack.length - 1];
        while (tempStack.length && tempTop < stackTopTemp) {
          stack.push(tempStack.pop());
          tempTop = tempStack[tempStack.length - 1];
        }
        tempStack.push(stackTopTemp);
      }
    }
    while (tempStack.length) {
      stack.push(tempStack.pop());
      
    }
    return stack;
  }
}
