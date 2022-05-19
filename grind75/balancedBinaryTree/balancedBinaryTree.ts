/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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

 function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  
  const balanced = new BalanceTracker();
  getHeight(root, balanced);
  
  return balanced.isBalanced();
};

// gets the total height of the (sub)tree
// checks at every point if the tree is unbalanced
// one failure is all that's needed to set the flag properly
function getHeight(node: TreeNode | null, balanced: BalanceTracker, height = 1): number {
  if (!node) {
      return height;
  }
  
  const leftHeight = getHeight(node.left, balanced, height + 1);
  const rightHeight = getHeight(node.right, balanced, height + 1);
  
  // check if the tree is balanced at this point
  if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced.fail();
  }
  
  return Math.max(leftHeight, rightHeight);
}

class BalanceTracker {
  balanced: boolean = true;

  fail() {
      this.balanced = false;
  }
  
  isBalanced() {
      return this.balanced;
  }
}