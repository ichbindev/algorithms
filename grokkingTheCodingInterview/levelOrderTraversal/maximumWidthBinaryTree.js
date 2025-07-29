/*
Given the root of a binary tree, find the maximum width of the tree.

The maximum width is the widest level in the tree.

The width of a level is the number of nodes between the leftmost and 
rightmost non-null nodes, where the null nodes between the end-nodes 
that would be present in a complete binary tree extending down to that 
level are also counted into the length calculation.

You can assume that the result will fit within a 32-bit signed integer.

Constraints:
- The number of nodes in the tree is in the range [1, 3000].
- -100 <= Node.val <= 100
*/

// class TreeNode {
//     constructor(x) {
//         this.val = x;
//         this.left = null;
//         this.right = null;
//     }
// }

class Solution {
    // Method to find the maximum width of the binary tree
    widthOfBinaryTree(root) {
        let maxWidth = 0;
        const queue = [];
        if (root) queue.push(root);

        let left, right
        while (left !== -1 || right !== -1) {
            left = -1, right = -1;
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node) {
                    if (left === -1) left = i;
                    else right = i;
                }
                queue.push(node?.left);
                queue.push(node?.right);
            }
            const width = Math.max(right - left + 1, 1);
            maxWidth = Math.max(maxWidth, width);
        }

        return maxWidth; 
    }
}
