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

  class DepthTracker {
    constructor(node, level) {
      this.node = node;
      this.level = level;
    }
  }

  class Solution {
    traverse(root) {
      const queue = [],
            result = [];
      queue.push(new DepthTracker(root, 1));
      while (queue.length) {
        const { node, level } = queue.shift();
        if (level > result.length) result.unshift([]);
        result[0].push(node.val);
        if (node.left) queue.push(new DepthTracker(node.left, level + 1));
        if (node.right) queue.push(new DepthTracker(node.right, level + 1));
      }
      return result;
    }
  }
