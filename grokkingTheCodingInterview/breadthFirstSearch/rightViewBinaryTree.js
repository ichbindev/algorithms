/*
Given a root of the binary tree, return an array containing 
nodes in its right view.

The right view of a binary tree consists of nodes that are 
visible when the tree is viewed from the right side. For each 
level of the tree, the last node encountered in that level will 
be included in the right view.

Constraints:
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100
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
    let queue = root ? [root] : [], 
        result = []; 

    while (queue.length) {
      let size = queue.length;
      while (size--) {
        const { left, right, val } = queue.shift();
        left && queue.push(left);
        right && queue.push(right);

        if (size === 0) result.push(val);
      }
    }

    return result;
  }
}
