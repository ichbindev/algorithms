/*
Given the head of a Singly LinkedList and a number ‘k’, 
rotate the LinkedList to the right by ‘k’ nodes.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {

  rotate(head, rotations) {
    if (!rotations) return head;

    head = this.reverse(head);
    head = this.rotateLeft(head, rotations);
    head = this.reverse(head);

    return head;
  }

  rotateLeft(head, rotations) {
    // make a cycle
    let prev, current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = head;

    // rotate
    current = head;
    while (rotations > 0) {
      prev = current;
      current = current.next;
      rotations--;
    }
    prev.next = null; // break cycle

    return current;
  }

  reverse(head) {
    let prev = null;
    while (head) {
      const { next } = head;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
}
