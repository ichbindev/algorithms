/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    // find the medium median
    nums.sort((a, b) => a - b);
    const avg = nums[~~(nums.length / 2)];

    // count number of moves to make everything = median
    const moves = nums.reduce((acc, num) => acc += Math.abs(num - avg), 0)
    return moves;
};
