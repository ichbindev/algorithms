/*
Given an undirected graph, represented as a list of edges. 
Each edge is illustrated as a pair of integers [u, v], 
signifying that there's a mutual connection between node u 
and node v.

You are also given starting node start, and a destination node 
end, return true if a path exists between the starting node and 
the destination node. Otherwise, return false.

Constraints: 
- 1 <= n <= 2 * 10^5
- 0 <= edges.length <= 2 * 10^5
- edges[i].length == 2
- 0 <= ui, vi <= n - 1
- ui != vi
- 0 <= source, destination <= n - 1
- There are no duplicate edges.
- There are no self edges.
*/

class Solution {
    validPath(n, edges, start, end) {
        const visited = new Array(n).fill(false),
              adjacencyList = this.buildAdjacencyList(n, edges),
              stack = [ start ];

        while (stack.length) {
            const edge = stack.pop();
            visited[edge] = true;
            for (const neighbor of adjacencyList[edge]) {
                if (neighbor === end) return true;
                if (!visited[neighbor]) stack.push(neighbor);
            }
        }

        return false;
    }

    buildAdjacencyList(n, edges) {
        const adjacencyList = Array.from(({ length: n }), () => []);
        for (const edge of edges) {
            const [start, end] = edge;
            adjacencyList[start].push(end);
            adjacencyList[end].push(start); // undirected graph!
        }
        return adjacencyList;
    }
}

