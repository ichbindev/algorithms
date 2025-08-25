/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = [],
          leaves2 = [];
    fillLeaves(root1, leaves1);
    fillLeaves(root2, leaves2);
    if (leaves1.length !== leaves2.length) return false;
    for (const i of leaves1.keys()) {
        if (leaves1[i] !== leaves2[i]) return false;
    }
    return true;
};

function fillLeaves(node, leaves) {
    if (!node) return;
    if (!node.left && !node.right) leaves.push(node.val);
    node.left && fillLeaves(node.left, leaves);
    node.right && fillLeaves(node.right, leaves);
}