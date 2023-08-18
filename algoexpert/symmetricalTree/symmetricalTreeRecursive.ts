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

export function symmetricalTree(tree: BinaryTree) {
  // Write your code here.
  return isSymmetrical(tree.left, tree.right);
}

function isSymmetrical(leftNode: BinaryTree | null, rightNode: BinaryTree | null): boolean {
  if (leftNode !== null && rightNode !== null) {
    return leftNode.value === rightNode.value && 
         isSymmetrical(leftNode.right, rightNode.left) &&
         isSymmetrical(leftNode.left, rightNode.right);
  }
  
  return leftNode === rightNode;
  
}
