// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if (node.right) {
    return findLeftmostChild(node.right);
  }
  return findRightmostAncestor(node);
}

function findLeftmostChild(node: BinaryTree): BinaryTree {
  while (node.left) {
    node = node.left;
  }
  return node;
}

function findRightmostAncestor(startingNode: BinaryTree) {
  let node = startingNode;

  while (node.parent && node === node.parent.right) {
    node = node.parent;
  }

  return node.parent;
}