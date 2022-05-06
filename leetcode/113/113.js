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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const paths = [];
    function findPaths(node, currentSum, path) {
        if (!node) {
            return;
        }
        // can refactor newSum to be sum of newPath
        // tradeoff: O(depth) op every call for cleaner code
        const newSum = currentSum + node.val;
        const newPath = [...path, node.val];
        if (!node.left && !node.right) {
            if (newSum === sum) {
                paths.push(newPath)
            }
        } else {
            findPaths(node.left, newSum, newPath);
            findPaths(node.right, newSum, newPath);
        }
    }
    findPaths(root, 0, []);
    return paths;
};
