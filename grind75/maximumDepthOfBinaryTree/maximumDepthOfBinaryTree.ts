/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/*
Runtime: 119 ms, faster than 45.99% of TypeScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 45.9 MB, less than 95.18% of TypeScript online submissions for Maximum Depth of Binary Tree.
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// O(n), will visit each leaf of the tree once
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};