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

type TreeNode = BinaryTree | undefined | null;

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  return merge(tree1, tree2, null, '');
}

function merge(node1: TreeNode, 
               node2: TreeNode, 
               parent: TreeNode,
               direction: string): TreeNode {

  // create new node
  let newNode: TreeNode = null;
  if (node1 && node2) {
    newNode = new BinaryTree(node1.value + node2.value);
  } else if (node1) {
    newNode = new BinaryTree(node1.value);
  } else if (node2) {
    newNode = new BinaryTree(node2.value);
  } else {
    return parent;
  }

  // link new node to new tree
  if (!parent) {
    parent = newNode;
  } else if (direction === 'left') {
    parent.left = newNode;
  } else if (direction === 'right') {
    parent.right = newNode;
  }

  // recursive calls
  merge(node1?.left, node2?.left, newNode, 'left');
  merge(node1?.right, node2?.right, newNode, 'right');
  
  return parent;
}