/*
Given a binary tree and a number ‘S’, find all paths from 
root-to-leaf such that the sum of all the node values of 
each path equals ‘S’.

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
  findPaths(root, sum, path = [], result = []) {
    if (!root) return result;

    const { left, right, val } = root;
    path.push(val);

    if (!left && !right && val === sum) result.push([...path]);
    left && this.findPaths(left, sum - val, path, result);
    right && this.findPaths(right, sum - val, path, result);
    
    path.pop(val); // remove node from list to backtrack
    return result;
  }
} 
