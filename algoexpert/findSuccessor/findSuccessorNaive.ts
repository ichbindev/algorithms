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
  // convert tree to in-order array
  const arr = toArray(tree);
  // find the successor
  return findResult(arr, node);
}

function toArray(tree: BinaryTree): BinaryTree[] {
  const arr: BinaryTree[] = [];
  fillIn(arr, tree);
  return arr;
}

// use in order traversal of tree to fill in array
function fillIn(arr: BinaryTree[], tree: BinaryTree): void {
  if (tree !== null) {
    fillIn(arr, tree.left!);
    arr.push(tree);
    fillIn(arr, tree.right!);
  }
}

// loop until you find the given node, then return the next node in the array
// if given node is the last one, return null
function findResult(arr: BinaryTree[], node: BinaryTree): BinaryTree | null {
  let found = false;
  for (let n of arr) {
    if (found) {
      return n;
    }
    if (n.value === node.value) {
      found = true;
    }
  }
  return null;
}