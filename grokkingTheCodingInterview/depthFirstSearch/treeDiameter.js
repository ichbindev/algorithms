/*
Given a binary tree, find the length of its diameter. The 
diameter of a tree is the number of nodes on the longest 
path between any two leaf nodes. The diameter of a tree may 
or may not pass through the root.

Note: You can always assume that there are at least two leaf 
nodes in the given tree.

Constraints:
- n == edges.length + 1
- 1 <= n <= 10^4
- 0 <= ai, bi < n
- ai != bi
*/

/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class TreeTracker {
  diameter = 0;
}

class Solution {
  findDiameter(root) {
    const tracker = new TreeTracker();
    this.getDepth(root, tracker);
    return tracker.diameter;
  }

  getDepth(node, tracker) {
    if (!node) return 0;
    const { left, right } = node; 
    if (!left && !right) return 1;
    const maxLeft = this.getDepth(left, tracker);
    const maxRight = this.getDepth(right, tracker);

    const cDiameter = maxLeft + maxRight + 1;
    tracker.diameter = Math.max(tracker.diameter, cDiameter);
    return Math.max(maxLeft, maxRight) + 1;
  }
}
