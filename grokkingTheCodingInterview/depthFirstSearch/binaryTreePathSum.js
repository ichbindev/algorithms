/*
Given a root of the binary tree and an integer ‘S’, return true 
if the tree has a path from root-to-leaf such that the sum of all 
the node values of that path equals ‘S’. Otherwise, return false.

Constraints:
- The number of nodes in the tree is in the range [0, 5000].
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000
*/

/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution {
  hasPath(root, sum) {
    if (!root) return false;
    const { left, right, val } = root;
    if (!left && !right) return val === sum;
    const inLeft = !!left && this.hasPath(left, sum - val);
    const inRight = !!right && this.hasPath(right, sum - val);
    return inLeft || inRight;
  }
}
