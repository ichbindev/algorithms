/*
Given a root of the binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

Constraints:
- The number of nodes in the tree is in the range [0, 2^12 - 1].
- -1000 <= Node.val <= 1000
*/

/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}*/

class Solution {
  connect(root) {
    const queue = root ? [root] : [];
    let last = null;
    while (queue.length) {
      const node = queue.shift();
      if (last) last.next = node;
      last = node;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    
    return root;
  }
}
