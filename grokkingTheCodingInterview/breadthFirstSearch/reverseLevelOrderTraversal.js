/*
Given the root of a binary tree, return the bottom-up 
level order traversal of its nodes' values. (i.e., the 
lowest level comes first in left to right order.)

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
      const queue = [],
            result = [];
      root && queue.push(root);
      while (queue.length) {
        let size = queue.length;
        result.unshift([]);
        while (size--) {
          const { val, left, right } = queue.shift();
          result[0].push(val);
          left && queue.push(left);
          right && queue.push(right);
        }
      }
      return result;
    }
  }
