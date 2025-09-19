/*
Given the root of a binary tree, the level of its root is 1, the 
level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of 
nodes at level x is maximal.

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- -10^5 <= Node.val <= 10^5
*/

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
var maxLevelSum = function(root) {
    let level = 0,
        maxSum = -Infinity,
        maxLevel = 0;
    const queue = root ? [ root ] : [];
    while (queue.length) {
        level++;
        let size = queue.length,
            sum = 0;
        while (size--) {
            const { val, left, right } = queue.shift();
            sum += val;
            left && queue.push(left);
            right && queue.push(right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }
    return maxLevel;
};