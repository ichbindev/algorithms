function cycleInGraph(edges) {
  const visited = new Set();
  for (const [node, _] in edges.entries()) {
    if (hasCycle(edges, node, new Set(), visited)) {
      return true;
    }
  }
  return false;
}

function hasCycle(edges, node, toVisit, visited) {
  if (visited.has(node)) return false;
  if (toVisit.has(node)) return true;
  toVisit.add(node);
  for (const edge in edges[node]) {
    if (hasCycle(edges, edge, toVisit, visited)) {
      return true;
    }
  }
  toVisit.delete(node);
  visited.add(node);
  return false;
}


// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
