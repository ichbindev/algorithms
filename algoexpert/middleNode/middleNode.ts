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
  // Write your code here.
  let lead = linkedList;
  let lag: LinkedList | null = linkedList;

  let counter = 0;
  while (lead.next) {
    lead = lead.next;
    if (counter % 2 === 1 && lag) {
      lag = lag.next;
    }
    ++counter;
  }
  
  return counter % 2 === 1 ? lag?.next : lag;
}
