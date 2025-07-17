/*
Given the head of a LinkedList and a number ‘k’, 
reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with 
less than ‘k’ elements, reverse it too.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {

  reverse(head, k) {
    let prev = null,
        current = head,
        newHead = null;
        
    while (current) {
      // reverse k nodes
      let times = k;
      const beginTail = prev,
            reverseTail = current;
      while (times && current) {
        const { next } = current;
        current.next = prev;
        prev = current;
        current = next;
        times--;
      }

      // stitch together
      if (beginTail) beginTail.next = prev;
      reverseTail.next = current;

      // update head on first reversal
      if (!newHead) newHead = prev;

      // update prev to be node before current
      prev = reverseTail; 
    }

    return newHead;
  }
}