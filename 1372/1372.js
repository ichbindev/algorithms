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

const LEFT = "LEFT";
const RIGHT = "RIGHT";

// depth first search with flag of left or right child
// if side is opposite, extend the streak
// otherwise start it over
// return the bigger of the two
const longestStreak = (node, streak, prevSide) => {
    if (!node) {
        return streak;
    }
    const leftStreak = prevSide === RIGHT ? streak + 1 : 0;
    const rightStreak = prevSide === LEFT ? streak + 1 : 0;
    return Math.max(
        longestStreak(node.left, leftStreak, LEFT), 
        longestStreak(node.right, rightStreak, RIGHT));
} 

const longestZigZag = function(root) {
    // only needs one param to start
    return longestStreak(root);
};


