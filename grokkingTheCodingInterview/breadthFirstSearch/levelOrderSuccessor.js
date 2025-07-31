/*
Given a root of the binary tree and an integer key, find the 
level order successor of the node containing the given key as 
a value in the tree.

The level order successor is the node that appears right after 
the given node in the level order traversal.

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
  findSuccessor(root, key) {
    const queue = [];
    if (root) queue.push(root);

    while (queue.length) {
      const { val, left, right } = queue.shift();
      if (left) queue.push(left);
      if (right) queue.push(right);
      if (val === key) return queue.shift() || null;
    }
    return null;
  }
}
