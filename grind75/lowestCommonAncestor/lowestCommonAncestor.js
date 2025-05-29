/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const inLeft = getNodeCount(root.left, p, q);
  const inRight = getNodeCount(root.right, p, q);
  if (inLeft === 2) return lowestCommonAncestor(root.left, p, q);
  if (inRight === 2) return lowestCommonAncestor(root.right, p, q);
  if (inLeft === 1 && inRight === 1) return root;
  if ((inLeft === 1 || inRight === 1) && (root === p || root === q)) return root;
  return null;
};

function getNodeCount(root, p, q) {
  if (root === null) {
      return 0;
  }
  const leftCount = getNodeCount(root.left, p, q);
  const rightCount = getNodeCount(root.right, p, q);
  const thisCount = root === p || root === q ? 1 : 0;
  return leftCount + rightCount + thisCount;
}