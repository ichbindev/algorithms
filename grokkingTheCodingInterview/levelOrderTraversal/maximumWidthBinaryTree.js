/*
Given the root of a binary tree, find the maximum width of the tree.

The maximum width is the widest level in the tree.

The width of a level is the number of nodes between the leftmost and 
rightmost non-null nodes, where the null nodes between the end-nodes 
that would be present in a complete binary tree extending down to that 
level are also counted into the length calculation.

You can assume that the result will fit within a 32-bit signed integer.

Constraints:
- The number of nodes in the tree is in the range [1, 3000].
- -100 <= Node.val <= 100
*/

// class TreeNode {
//     constructor(x) {
//         this.val = x;
//         this.left = null;
//         this.right = null;
//     }
// }

class NodeIndex {
  constructor(node, index) {
    this.node = node;
    this.index = index;
  }
}

class Solution {
  // Method to find the maximum width of the binary tree
  widthOfBinaryTree(root) {
    let maxWidth = 0;
    const queue = [];
    if (root) queue.push(new NodeIndex(root, 0));

    while (queue.length) {
      let first = 0,
        last = 0;
      const size = queue.length,
        mIndex = queue[0].index;
      for (let i = 0; i < size; i++) {
        const { node, index: cIndex } = queue.shift();
        let index = cIndex - mIndex;
        if (i === 0) first = index;
        if (i === size - 1) last = index;

        const { left, right } = node;
        if (left) queue.push(new NodeIndex(left, 2 * index));
        if (right) queue.push(new NodeIndex(right, 2 * index + 1));
      }
      maxWidth = Math.max(last - first + 1, maxWidth);
    }

    return maxWidth;
  }
}
