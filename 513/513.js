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
var findBottomLeftValue = function(root) {
    // depth first search, keep track of depth & 'left most'
    // the first you interact with at that depth is the left most
    let leftMost = {
        val: root.val,
        depth: 0
    };
    dfs(root, 0, leftMost);
    return leftMost.val;
};

const checkVal = (node, depth, leftMost) => {
    if (depth > leftMost.depth) {
        leftMost.val = node.val;
        leftMost.depth = depth;
    }
};

const dfs = (node, depth, leftMost) => {
    if (node === null) {
        return;
    }
    checkVal(node, depth, leftMost);
    dfs(node.left, depth + 1, leftMost);
    dfs(node.right, depth + 1, leftMost);
};



