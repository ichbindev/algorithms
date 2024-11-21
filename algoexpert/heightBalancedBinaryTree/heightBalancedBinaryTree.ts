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

class TreeChecker {
  depth: number;
  balanced: boolean;
  
  constructor(depth: number = 0, balanced: boolean = true) {
    this.depth = depth;
    this.balanced = balanced;
  }
}

export function heightBalancedBinaryTree(tree: BinaryTree) {
  const treeChecker = checkTree(tree);
  return treeChecker.balanced;
}

function checkTree(tree: BinaryTree | null): TreeChecker {
  if (!tree) {
    return new TreeChecker(0, true);
  }
  const leftTree = checkTree(tree.left);
  const rightTree = checkTree(tree.right);
  const newDepth = Math.max(leftTree.depth, rightTree.depth) + 1;
  const newBalanced = leftTree.balanced && 
                      rightTree.balanced &&
                      Math.abs(leftTree.depth - rightTree.depth) <= 1;
  return new TreeChecker(newDepth, newBalanced);
}
