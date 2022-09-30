/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  if (!node) return node;
  const oldToNew: Map<Node, Node> = new Map();
  
  function clone(node): Node | null {
      if (oldToNew.has(node)) {
          return oldToNew.get(node) || null;
      }
      
      const copy = new Node(node.val, []);
      oldToNew.set(node, copy);
      const copyNeighbors = node.neighbors.map(n => clone(n));
      copy.neighbors = copyNeighbors;
      return copy;
  }
  
  return clone(node);
};