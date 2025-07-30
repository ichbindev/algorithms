/*
Given a binary tree, populate an array to represent 
the averages of all of its levels.

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- -2^31 <= Node.val <= 2^31 - 1
*/

/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}*/

class Solution {
  findLevelAverages(root) {
    const queue = [],
          result = [];
    root && queue.push(root);

    while (queue.length) {
      let size = queue.length,
          sum = 0;
      for (const _ of Array(size)) {
        const { val, left, right } = queue.shift();
        sum += val;
        left && queue.push(left);
        right && queue.push(right);
      }
      result.push(sum / size);
    }

    return result;
  }
}
