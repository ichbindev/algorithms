// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function splitBinaryTree(tree: BinaryTree): number {
  // if tree can be split into two equal values, they must equal half of the sum of the tree
  const target = sumBinaryTree(tree) / 2;
  return targetSubtreeExists(tree, target) ? target : 0;
}

// find if some subtree exists that sums to target value
function targetSubtreeExists(node: BinaryTree | null, target: number): boolean {
  if (node === null) {
    return false;
  }
  
  const subtreeSum = sumBinaryTree(node);
  return subtreeSum === target || 
         targetSubtreeExists(node.left, target) ||
         targetSubtreeExists(node.right, target);
}

// sum of entire tree/subtree, including root
function sumBinaryTree(tree: BinaryTree | null): number {
  if (tree === null) {
    return 0;
  }
  
  return tree.value + sumBinaryTree(tree.left) + sumBinaryTree(tree.right);
}
