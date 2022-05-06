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
var sumNumbers = function(root) {
    // depth first search, take node, arr and path so far
    // if null, add 'so far' to list
    // if not, go to children with so far appended node.val 
    // reduce sum array and return
    let sums = [];
    let getNumbers = function(node, partialNumber) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            sums.push(10 * partialNumber + node.val);
        } 
        else {
            getNumbers(node.left, 10 * partialNumber + node.val);
            getNumbers(node.right, 10 * partialNumber + node.val);
        }
    }
    getNumbers(root, '');
    if (!sums.length) return 0;
    const result = sums.reduce((a, v) => a + v);
    return result;
};
