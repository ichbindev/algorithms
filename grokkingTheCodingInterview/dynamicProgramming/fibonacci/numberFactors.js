/*
Given a number 'n', implement a method to count how many possible ways there 
are to express 'n' as the sum of 1, 3, or 4.
*/

class Solution {

  countWays (n) {
    const ways = [1, 1, 1, 2, 4];
    while (ways.length < n + 1) {
      const l = ways.length;
      ways.push(ways[l - 1] + ways[l - 3] + ways[l - 4]);
    }
    return ways[n];
  }
}