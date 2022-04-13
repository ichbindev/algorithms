type LinkedListNode = LinkedList | null;

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedListNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(head: LinkedList) {
  let current: LinkedListNode = head;
	let previous: LinkedListNode = null;
	// node by node, change the pointer direction and advance
	while (current) {
		let next: LinkedListNode = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}
	// current is null, so new head is previous
	return previous;
}

