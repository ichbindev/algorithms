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
  countPaths(node, targetSum, currentSum = 0, pSums = {}) {
    if (!node) return 0;

    let paths = 0;
    const { left, right, val } = node;

    currentSum += val;
    if (currentSum === targetSum) paths++;

    // look for path = targetSum in prefix sum map
    if (currentSum - targetSum in pSums) paths += pSums[currentSum - targetSum];
    // add current sum to prefix sum map
    pSums[currentSum] = pSums[currentSum] + 1 || 1;

    paths += this.countPaths(left, targetSum, currentSum, pSums);
    paths += this.countPaths(right, targetSum, currentSum, pSums);

    // remove current sum for backtracking
    pSums[currentSum] = pSums[currentSum] - 1;
    return paths;
  }
}
