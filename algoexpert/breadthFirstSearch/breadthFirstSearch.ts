// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];
  visited: boolean;

  constructor(name: string) {
    this.name = name;
    this.children = [];
    this.visited = false;
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current !== undefined) { // get around typescript complaints
        array.push(current.name);
        for (const child of current.children) {
          queue.push(child);
        }
      }
    }
    return array;
  }
}
