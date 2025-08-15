// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let size = 1;

  // get size of list and find tail
  let tail = head;
  while (tail.next) {
    size++;
    tail = tail.next;
  }
  
  // calc shift, done if no shift
  let shift = size - k % size;
  if (!shift) return head;

  // make list a cycle
  tail.next = head;

  // shift tail and update head/tail 
  while (shift--) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
  
  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;
