/*
Given a root of the binary tree, connect each node with its level 
order successor. The last node of each level should point to a null node.

Constraints:
- The number of nodes in the tree is in the range [0, 2^12 - 1].
- -1000 <= Node.val <= 1000
*/

// class TreeNode {
//   constructor(x) {
//     this.val = x;
//     this.left = this.right = this.next = null;
//   }
// }

class Solution {
  connect(root) {
    const queue = [];
    root && queue.push(root);

    while (queue.length) {
      let size = queue.length,
          last = null;
      while (size--) {
        const node = queue.shift();
        if (last) last.next = node;
        last = node;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    return root;
  }
}

