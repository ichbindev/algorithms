/*
You are given a directed graph with n nodes, labeled from 0 to n-1. 
This graph is described by a 2D integer array graph, where graph[i] 
is an array of nodes adjacent to node i, indicating there is a directed 
edge from node i to each of the nodes in graph[i].

A node is called a terminal node if it has no outgoing edges. A node is 
considered safe if every path starting from that node leads to a terminal 
node (or another safe node).

Return an array of all safe nodes in ascending order.

Constraints:
- n == graph.length
- 1 <= n <= 10^4
- 0 <= graph[i].length <= n
- 0 <= graph[i][j] <= n - 1
- graph[i] is sorted in a strictly increasing order.
- The graph may contain self-loops.
- The number of edges in the graph will be in the range [1, 4 * 10^4].
*/

class Solution {
  eventualSafeNodes(graph) {
    const visited = new Array(graph.length).fill(false); // 0 not visited, 1 visited, -1 safe

    for (const node of graph.keys()) {
      this.markSafeNodes(node, graph, visited);
    }

    return visited.reduce((a, c, i) => {
      if (c === -1) a.push(i);
      return a;
    }, []);
  }

  markSafeNodes(node, graph, visited) {
    if (visited[node]) return visited[node] === -1;
    const neighbors = graph[node];

    visited[node] = 1;
    for (const n of neighbors) {
      const neighborIsSafe = this.markSafeNodes(n, graph, visited);

      if (!neighborIsSafe) return false;
    }
    visited[node] = -1;
    return true;
  }
}
