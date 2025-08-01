/*
Given a binary tree and a number sequence, find if the 
sequence is present as a root-to-leaf path in the given tree.

Constraints:
- 1 <= arr.length <= 5000
- 0 <= arr[i] <= 9
- Each node's value is between [0 - 9].
*/

/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution { 
  findPath(root, sequence) {
    if (!root) return false;

    const { left, right, val } = root;
    const sequenceVal = sequence.shift();
    if (!left && !right) { // leaf
      return val === sequenceVal && !sequence.length;
    }

    const leftHasPath = left && this.findPath(left, sequence),
          rightHasPath = right && this.findPath(right, sequence);

    sequence.unshift(sequenceVal); // for backtracking!

    return leftHasPath || rightHasPath;
  }
}
