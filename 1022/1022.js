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
var sumRootToLeaf = function(root) {
    // two parts
        // get the numbers to sum
        // convert to int
    
    // traverse the tree and get the binary values as strings
    const numbers = [];
    const getBinaryNumbers = (node, path) => {
        if (!node) {
            return;
        }
        const newPath = path + node.val;
        if (!node.left && !node.right) {
            numbers.push(newPath);
        } else {
            getBinaryNumbers(node.left, newPath);
            getBinaryNumbers(node.right, newPath)
        }
    }
    getBinaryNumbers(root, '');
    return sumBinary(numbers);
};

function sumBinary(numbers) {
    // parse the binary numbers into ints and add them up
    return numbers
        .map(num => parseInt(num, 2))
        .reduce((a, v) => a + v);
}
