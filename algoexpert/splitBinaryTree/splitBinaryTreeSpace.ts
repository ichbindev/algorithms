// faster than initial implementation but uses o(n) space

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
  const subtreeSums: Set<number> = new Set();
  const target = sumBinaryTree(tree, subtreeSums) / 2;
  return subtreeSums.has(target) ? target : 0;
}

function sumBinaryTree(tree: BinaryTree | null, subtreeSums: Set<number>): number {
  if (tree === null) {
    return 0;
  }

  const left = sumBinaryTree(tree.left, subtreeSums);
  const right = sumBinaryTree(tree.right, subtreeSums);
  const totalSum = tree.value + left + right;
  
  subtreeSums.add(totalSum);
  return totalSum;
}
