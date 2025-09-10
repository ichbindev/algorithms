/*
Given the root of a binary tree, imagine yourself standing on the 
right side of it, return the values of the nodes you can see ordered 
from top to bottom.

Constraints:
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const rightValues = [],
          queue = [];
    root && queue.push(root);

    while (queue.length) {
        let size = queue.length;
        while (size--) {
            const { left, right, val } = queue.shift();
            left && queue.push(left);
            right && queue.push(right);
            if (size === 0) rightValues.push(val);
        }
    }

    return rightValues;
};