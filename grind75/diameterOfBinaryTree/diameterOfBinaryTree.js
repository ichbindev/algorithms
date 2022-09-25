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

/*
Runtime: 129 ms, faster than 37.93% of TypeScript online submissions for Diameter of Binary Tree.
Memory Usage: 47.3 MB, less than 31.97% of TypeScript online submissions for Diameter of Binary Tree.
*/

/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

function diameterOfBinaryTree(root: TreeNode | null): number {
  const result = findDiameter(root);
  return result.width;
};

function findDiameter(root: TreeNode | null): TreeTracker {
  if (!root) {
      return new TreeTracker();
  }
  
  const left = findDiameter(root.left);
  const right = findDiameter(root.right);
  
  const currentHeight = Math.max(left.height, right.height) + 1;
  const currentWidth = left.height + right.height;
  const childWidth = Math.max(left.width, right.width);
  const bestWidth = Math.max(currentWidth, childWidth);
  
  return new TreeTracker(bestWidth, currentHeight);
}

class TreeTracker {
  width: number;
  height: number;

  constructor(width: number = 0, height: number = 0) {
      this.width = width;
      this.height = height;
  }
}