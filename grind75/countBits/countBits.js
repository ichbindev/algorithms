/*
Given an integer n, return an array ans of length n + 1 such that 
for each i (0 <= i <= n), ans[i] is the number of 1's in the binary 
representation of i.
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const numBits = new Array(n + 1).fill(0);
    let base = 1;
    for (let i = 1; i <= n; i++) {
        if (i === 2 * base) base = i;
        numBits[i] = numBits[i - base] + 1;
    }
    return numBits;
};