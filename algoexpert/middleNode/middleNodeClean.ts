// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function middleNode(linkedList: LinkedList) {
  let leadNode: LinkedList | null = linkedList;
  let lagNode = linkedList;

  while (leadNode !== null && leadNode.next !== null) {
    leadNode = leadNode.next.next;
    lagNode = lagNode.next!;
  }

  return lagNode;
}
