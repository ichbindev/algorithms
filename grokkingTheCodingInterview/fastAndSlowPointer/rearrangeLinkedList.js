/*
Given the head of a Singly LinkedList, write a method to 
modify the LinkedList such that the nodes from the second 
half of the LinkedList are inserted alternately to the nodes 
from the first half in reverse order. So if the LinkedList has 
nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should 
return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should use only constant space the input LinkedList 
should be modified in-place.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  reorder(head) {
    // find the middle
    const  middle = this.findMiddle(head);
    // reverse the second half 
    const tail = this.reverseFrom(middle);
    // insert second half into first, alternating
    return this.insertAlternating(head, tail);
  }

  insertAlternating(head, tail) {
    const start = head;

    while (tail?.next) {
      const headNext = head.next,
            tailNext = tail.next; 
      tail.next = head.next;
      head.next = tail;
      tail = tailNext;
      head = headNext;
    }

    return start;
  }

  findMiddle(head) {
    let fast = head, 
        slow = head;

    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  reverseFrom(node) {
    let prev = null;

    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  }
}
