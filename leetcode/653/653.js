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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // create a set to track what nodes have been seen
    const set = new Set();
    
    // do a depth first traversal
    function traverse(node) {
        if (node === null) {
            return false;
        }
        // check if the matching number has been seen
        const target = k - node.val;
        if (set.has(target)) {
            return true;
        }
        // add the current value to the set
        set.add(node.val);
        return traverse(node.left) || traverse(node.right);
    }
    return traverse(root);
};
