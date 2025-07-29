/*
Given the root of a binary tree, return an array containing the largest 
value in each row of the tree (0-indexed).

- The number of nodes in the tree will be in the range [0, 104].
- -231 <= Node.val <= 231 - 1
*/

// Definition for a binary tree node
// class TreeNode(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }

class Solution {
    largestValues(root) {
        const result = [],
              queue = [root];
        while (queue.length) {
            const rowSize = queue.length;
            let rowMax = -Infinity;
            for (let i = 0; i < rowSize; i++) {
                const node = queue.shift();
                rowMax = Math.max(rowMax, node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(rowMax);
        }
        return result;
    }
}

