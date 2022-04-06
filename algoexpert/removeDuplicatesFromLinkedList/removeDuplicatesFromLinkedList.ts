// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList): LinkedList {
  let currentNode: LinkedList | null = linkedList;
	
	while (currentNode) {
		let nextNode: LinkedList | null = currentNode.next;
		
		// if currentNode matches nextNode
		// make currentNode.next equal to the next non-matching node
		while (nextNode && currentNode.value === nextNode.value) {
			nextNode = nextNode.next;
		}
		
		currentNode.next = nextNode;
		currentNode = nextNode;
	}
	
	return linkedList;
}

