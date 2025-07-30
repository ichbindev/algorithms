/*
Given a binary tree, populate an array to represent its zigzag 
level order traversal. You should populate the values of all nodes 
of the first level from left to right, then right to left for the 
next level and keep alternating in the same manner for the following 
levels.

Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000
*/

/*class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }*/

  class Solution {
    traverse(root) {
      let queue = [],
          reverseDir = false;
      const result = [];
      if (root) queue.push(root);
      while (queue.length) {
        const rowVals = [];
        let size = queue.length;
        while (size--) {
          const { val, left, right } = queue.shift();

          if (reverseDir) {
            rowVals.unshift(val);
          } else {
            rowVals.push(val);
          }

          if (left) queue.push(left);
          if (right) queue.push(right);
        }
        reverseDir = !reverseDir;
        result.push(rowVals);
      } 
      return result;
    }
    
    traverseStack(root) {
      let stack = [],
          dir = true;
      const result = [];
      if (root) stack.push(root);
      while (stack.length) {
        const rowVals = [],
              nextStack = [];
        while (stack.length) {
          const { val, left, right } = stack.pop();
          rowVals.push(val);
          if (dir && left) nextStack.push(left);
          if (right) nextStack.push(right);
          if (!dir && left) nextStack.push(left);
        }
        dir = !dir;
        result.push(rowVals);
        stack = nextStack;
      } 
      return result;
    }
  }
