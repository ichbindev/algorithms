/*
Given a binary tree, populate an array to represent its zigzag 
level order traversal. You should populate the values of all nodes 
of the first level from left to right, then right to left for the 
next level and keep alternating in the same manner for the following 
levels.

Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000
*/

/*class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }*/

  class Solution {
    traverse(root) {
      let queue = [],
          leftToRight = true;
      const result = [];
      root && queue.push(root);

      while (queue.length) {
        let size = queue.length;
        const level = Array.from({ length: size });
        let index = leftToRight ? 0 : size - 1;

        while (index >= 0 && index < size) {
          const { val, left, right } = queue.shift();
          level[index] = val;

          left && queue.push(left);
          right && queue.push(right);
          
          index = leftToRight ? index + 1 : index - 1;
        }

        result.push(level);
        leftToRight = !leftToRight;
      } 
      return result;
    }
  }
