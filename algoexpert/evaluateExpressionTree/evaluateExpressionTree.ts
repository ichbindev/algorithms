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

export function evaluateExpressionTree(tree: BinaryTree): number {
  
  const operator = tree.value;

  // value is not an operator, so it's a leaf
  if (operator >= 0) {
    return operator;
  }

  // recursive calls 
  const left = evaluateExpressionTree(tree.left!);
  const right = evaluateExpressionTree(tree.right!);
  
  switch (operator) {
    case -1: {
      return left + right;
    }
    case -2: {
      return left - right;
    }
    case -3: {
      // round towards 0, so use trunc instead of floor
      return Math.trunc(left / right);
    }
    case -4: {
      return left * right;
    }
  }

  // unreachable but makes function more readable IMO
  return operator;
}

