/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    // store all subtree sums and find total sum
    const arr = [];
    let total = sumTree(root, arr);
    
    // for each subtree sum multiply it by the 
    // rest of the subtree, keep the max
    let maxProd = 0;
    for (sum of arr) {
        const product = sum * (total - sum);
        if (product > maxProd) {
            maxProd = product;
        }
    }
    // mod result by the magic number specified
    return maxProd % (10e8 + 7);
};

function sumTree(node, arr) {
    if (!node) {
        return 0;
    }
    // a trees sum is its value + its childrens'
    const sum = node.val + sumTree(node.left, arr) + sumTree(node.right, arr);
    
    arr.push(sum);
    return sum;
}
