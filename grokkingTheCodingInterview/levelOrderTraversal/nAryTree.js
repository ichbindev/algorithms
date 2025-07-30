/*
Given an n-ary tree, return a list representing the level order 
traversal of the nodes' values in this tree.

The input tree is serialized in an array format using level order 
traversal, where the children of each node are grouped together 
and separated by a null value.

Constraints:
- The height of the n-ary tree is less than or equal to 1000
- The total number of nodes is between [0, 104]
*/

// class NAryNode {
//     constructor(val = 0, children = []) {
//         this.val = val;
//         this.children = children;
//     }
// }

class Solution {
    levelOrder(root) {
        const result = [],
              queue = [];
        if (root) queue.push(root);

        while(queue.length) {
            let size = queue.length;
            const level = [];
            while (size--) {
                const { val, children } = queue.shift();
                level.push(val);
                queue.push(...children);
            }
            result.push(level);
        }
        
        return result;
    }
}
