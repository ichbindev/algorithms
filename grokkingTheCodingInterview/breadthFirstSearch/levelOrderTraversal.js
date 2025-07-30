/*
Given a binary tree, populate an array to represent its level-by-level 
traversal. You should populate the values of all nodes of each level from 
left to right in separate sub-arrays.

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
        result = [];
    if (root) queue.push(root);
    while (queue.length) {
      let size = queue.length;
      const level = [];
      while (size--) {
        const { val, left, right } = queue.shift();
        level.push(val);
        left && queue.push(left);
        right && queue.push(right);
      }
      result.push(level);
    }
    return result;
  }
}
