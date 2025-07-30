/*
Given a binary tree, return true if it is an Even-Odd tree. 
Otherwise, return false.

The Even-odd tree must follow below two rules:

1.  At every even-indexed level (starting from 0), all node values 
    must be odd and arranged in strictly increasing order from 
    left to right.
2.  At every odd-indexed level, all node values must be even and 
    arranged in strictly decreasing order from left to right.

Constraints:
- The number of nodes in the tree is in the range [1, 105].
- 1 <= Node.val <= 106
*/

// class TreeNode {
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

class Solution {
    isEvenOddTree(root) {
        const queue = [];
        let level = 0;
        if (root) queue.push(root);

        while (queue.length) {
            const levelSize = queue.length;
            let last;
            for (const _ of Array(levelSize)) {
                const { val, left, right } = queue.shift();

                if (level % 2 === 0) {
                    if (last && last >= val || val % 2 !== 1) return false;                
                } else {
                    if (last && last <= val || val % 2 !== 0) return false;
                }

                last = val;
                if (left) queue.push(left);
                if (right) queue.push(right);
            }
            level++;
        }
        
        return true;
    }
}

