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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    
    // create a map of sum frequencies
    // keep track of the most frequent sums
    let sumCounts = {};
    let mostFrequentSums = [];
    let highestFrequency = 0;
    
    // find the sum of every subtree
    function subtreeSum(node) {
        if (node === null) {
            return 0;
        }
        const sum = node.val + subtreeSum(node.left) + subtreeSum(node.right);
        
        // store the sum in the map
        let frequency = sumCounts[sum];
        if (!frequency) {
            frequency = 1;
        } 
        sumCounts[sum] = frequency + 1;
        
        // track the highest frequency sums
        if (frequency > highestFrequency) {
            highestFrequency = frequency;
            mostFrequentSums = [sum];
        } else if (frequency === highestFrequency) {
            mostFrequentSums.push(sum);
        }
        
        return sum;
    }
    
    subtreeSum(root);
    return mostFrequentSums;
};


