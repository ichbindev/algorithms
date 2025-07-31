/*
Given a root of the binary tree, find the minimum depth of a 
binary tree.

The minimum depth is the number of nodes along the shortest 
path from the root node to the nearest leaf node.

Constraints:
- The number of nodes in the tree is in the range [0, 10^5].
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
  findDepth(root) {
    let level = 0;
    const queue = [];
    root && queue.push(root);

    while (queue.length) {
      ++level;
      let size = queue.length;
      while (size--) {
        const { left, right } = queue.shift();
        if (!left && !right) return level;
        left && queue.push(left);
        right && queue.push(right);
      }
    }
    return level;
  }
}
