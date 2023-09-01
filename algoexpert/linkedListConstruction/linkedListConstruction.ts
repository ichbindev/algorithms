// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node: Node) {
    if (!this.tail) {
      this.setHead(node);
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (this.head === nodeToInsert && this.tail === nodeToInsert) return;
    this.remove(nodeToInsert);
    
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!node.prev) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (this.head === nodeToInsert && this.tail === nodeToInsert) return;
    this.remove(nodeToInsert);
    
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (!node.next) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    // find node at position
    let node = this.head;
    let currentPosition = 1;
    while (node && currentPosition !== position) {
      node = node.next;
      ++currentPosition;
    }
    // insert before
    if (node) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value: number) {
    // gather all nodes with given value
    let nodes: Node[] = [];
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        nodes.push(currentNode);
      }
      currentNode = currentNode.next;
    }
    // remove each node
    nodes.forEach(node => this.remove(node));
  }

  remove(node: Node) {
    // handle head/tail removal
    if (node === this.head) {
      this.head = node.next;
    } 
    if (node === this.tail) {
      this.tail = node.prev;
    } 
    // pass connections through node
    // make sure node is pointing to null
    const { prev, next } = node;
    if (prev) prev.next = next;
    if (next) next.prev = prev;
    node.prev = null;
    node.next = null;  
  }


  containsNodeWithValue(value: number) {
    let currentNode: Node | null = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}
