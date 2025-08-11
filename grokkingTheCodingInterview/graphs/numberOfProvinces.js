/*
There are n cities. Some of them are connected in a network. 
If City A is directly connected to City B, and City B is directly 
connected to City C, city A is indirectly connected to City C.

If a group of cities are connected directly or indirectly, they 
form a province.

Given an n x n matrix isConnected where isConnected[i][j] = 1 if 
the ith city and the jth city are directly connected, and 
isConnected[i][j] = 0 otherwise, determine the total number of 
provinces.

Constraints:
- 1 <= n <= 200
- n == isConnected.length
- n == isConnected[i].length
- isConnected[i][j] is 1 or 0.
- isConnected[i][i] == 1
- isConnected[i][j] == isConnected[j][i]
*/

class Solution {
  findProvinces(isConnected) {
    const visited = new Array(isConnected.length).fill(false);
    let provinces = 0;

    for (const [vertex] of isConnected.entries()) {
      if (visited[vertex]) continue;

      provinces++;
      const stack = [vertex];
      while (stack.length) {
        const v = stack.pop();
        visited[v] = true;
        isConnected[v].forEach((e, i) => {
          if (e && !visited[i]) stack.push(i);
        });
      }
    }

    return provinces;
  }
}
