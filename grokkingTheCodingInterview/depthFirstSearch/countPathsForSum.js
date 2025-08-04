/*
Given a binary tree and a number ‘S’, find all paths in the 
tree such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all paths 
must follow direction from parent to child (top to bottom).

Constraints:
The number of nodes in the tree is in the range [0, 1000].
- -10^9 <= Node.val <= 10^9
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
  countPaths(root, sum, path = []) {
    if (!root) return 0;
    const { left, right, val } = root;
    path.push(val);
    let count = 0, pSum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      pSum += path[i];
      if (pSum === sum) count++;
    }
    

    const leftCount = this.countPaths(left, sum, path);
    const rightCount = this.countPaths(right, sum, path);
    path.pop(val);
    return count + leftCount + rightCount;
  }
}
