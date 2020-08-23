/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deepestLeavesSum(root: TreeNode | null): number {
    let deepestArr: number[] = [];
    let deepest: number = 0;
    
   function traverseAndSum(node: TreeNode | null, depth: number) {
        if (node === null) {
            return;
        }
       
       if (depth > deepest) {
           deepestArr = [];
           deepest = depth;
       }
       if (depth === deepest) {
           deepestArr.push(node.val)
       }
       traverseAndSum(node.left, depth + 1);
       traverseAndSum(node.right, depth + 1);
   };
    
    traverseAndSum(root, 0);
    return deepestArr.reduce((a, b) => a + b);
};


