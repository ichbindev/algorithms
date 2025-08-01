/*
Given a binary tree where each node can only have a digit (0-9) 
value, each root-to-leaf path will represent a number. Find the 
total sum of all the numbers represented by all paths.

Constraints:
- The number of nodes in the tree is in the range [1, 1000].
- 0 <= Node.val <= 9
- The depth of the tree will not exceed 10.
*/

/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution {
  findSumOfPathNumbers(root, sum = 0) {
    if (root === null ) return 0;

    const { left, right, val } = root;
    sum *= 10;
    sum += val;

    if (!left && !right) {
      return sum;
    }

    return this.findSumOfPathNumbers(left, sum) +
           this.findSumOfPathNumbers(right, sum);
  }
}
