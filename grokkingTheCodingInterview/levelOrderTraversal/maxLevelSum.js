/*
You are given the root of a binary tree. The level of its root 
node is 1, the level of its children is 2, and so on.

Return the level x where the sum of the values of all nodes is 
the highest. If there are multiple levels with the same maximum sum, 
return the smallest level number x.

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- -10^5 <= Node.val <= 10^5
*/

// Definition for a binary tree node
// class TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

class Solution {
  maxLevelSum(root) {
    let maxSum = -Infinity,
      maxSumLevel = 1,
      level = 1;
    const queue = [];
    if (root) queue.push(root);

    while (queue.length) {
      let sum = 0,
        size = queue.length;
      while (size--) {
        const { left, right, val } = queue.shift();
        sum += val;
        if (left) queue.push(left);
        if (right) queue.push(right);
      }
      if (sum > maxSum) {
        maxSum = sum;
        maxSumLevel = level;
      }
      ++level;
    }

    return maxSumLevel;
  }
}
