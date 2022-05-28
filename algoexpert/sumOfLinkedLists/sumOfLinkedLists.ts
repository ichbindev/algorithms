// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  const head = new LinkedList(0);
  let current = head,
      carry = 0;

  let n1: LinkedList | null = linkedListOne,
      n2: LinkedList | null = linkedListTwo;
  
  while (n1 || n2 || carry) {
    const leftVal = n1?.value || 0,
          rightVal = n2?.value ||0;
    const sum = leftVal + rightVal + carry,
          result = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    const newNode = new LinkedList(result);
    current.next = newNode;
    current = newNode;
    n1 = n1 && n1.next;
    n2 = n2 && n2.next;
  }

  return head.next;
}
