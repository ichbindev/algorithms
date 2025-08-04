/*
Find the path with the maximum sum in a given binary tree. Write a 
function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes 
and doesn’t necessarily pass through the root. The path must contain 
at least one node.

Constraints:
- The number of nodes in the tree is in the range [1, 3 * 10^4].
- -1000 <= Node.val <= 1000
*/
/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class TreeTracker {
  maxSum = -Infinity;
}

class Solution {
  findMaximumPathSum(root) {
    const tracker = new TreeTracker();
    this.findPathSum(root, tracker);
    return tracker.maxSum;
  }

  findPathSum(node, tracker) {
    if (!node) return 0;
    const { left, right, val } = node;

    const leftSum = Math.max(this.findPathSum(left, tracker), 0);
    const rightSum = Math.max(this.findPathSum(right, tracker), 0);
    const pathSum = val + leftSum + rightSum;

    tracker.maxSum = Math.max(tracker.maxSum, pathSum);

    if (!left && !right) return val;
    return Math.max(leftSum, rightSum) + val;
  }
}
