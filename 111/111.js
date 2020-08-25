/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    // simple DFS, add one for every layer deep
    return traverse(root, 1);
};

function traverse(node, depth) {
    // check if null to distinguish single child parents from leaves
    if (!node.left && !node.right) {
        return depth;
    } else if (!node.left) {
        return traverse(node.right, depth + 1);
    } else if (!node.right) {
        return traverse(node.left, depth + 1);
    }

    return Math.min(traverse(node.left, depth + 1), traverse(node.right, depth + 1));
}
