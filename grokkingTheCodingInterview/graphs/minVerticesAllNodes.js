/*
Given a directed acyclic graph with n nodes labeled from 0 to n-1, 
determine the smallest number of initial nodes such that you can 
access all the nodes by traversing edges. Return these nodes.

Constraints:
- 2 <= n <= 10^5
- 1 <= edges.length <= min(10^5, n * (n - 1) / 2)
- edges[i].length == 2
- 0 <= fromi, toi < n
- All pairs (fromi, toi) are distinct.
*/

class Solution {
  findSmallestSetOfVertices(n, edges) {
    const result = [],
      hasIncomingEdges = new Array(n).fill(false);

    for (const [, end] of edges) {
      hasIncomingEdges[end] = true;
    }

    for (const node of Array(n).keys()) {
      if (!hasIncomingEdges[node]) result.push(node);
    }

    return result;
  }
}
