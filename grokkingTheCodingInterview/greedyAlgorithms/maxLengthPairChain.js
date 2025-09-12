/*
Given a collection of pairs where each pair contains two elements [a, b] and 
a < b, find the maximum length of a chain you can form using pairs.

A pair [a, b] can follow another pair [c, d] in the chain if b < c.

You can select pairs in any order and don't need to use all the given pairs.

Constraints:
- n == pairs.length
- 1 <= n <= 1000
- -1000 <= lefti < righti <= 1000
*/

class Solution {
  findLongestChain(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);

    let end = -Infinity,
      length = 0;
    for (const pair of pairs) {
      if (pair[0] > end) {
        length++;
        end = pair[1];
      }
    }

    return length;
  }
}
