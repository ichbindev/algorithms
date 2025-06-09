function twoColorable(edges) {
  const colors = new Array(edges.length).fill(null);
  const toVisit = [0];
  colors[0] = true;
  
  while (toVisit.length) {
    const currentNode = toVisit.pop();
    for (const neighbor of edges[currentNode]) {
      if (!colors[neighbor]) {
        colors[neighbor] = !colors[currentNode];
        toVisit.push(neighbor);
      } else {
        if (colors[currentNode] === colors[neighbor]) {
          return false;
        }
      }
    }
  }
  return true;
}

// Do not edit the line below.
exports.twoColorable = twoColorable;
