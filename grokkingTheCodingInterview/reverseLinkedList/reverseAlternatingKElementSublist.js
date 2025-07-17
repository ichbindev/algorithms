/*
Given the head of a LinkedList and a number ‘k’, reverse 
every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than 
‘k’ elements, reverse it too.
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
        current = head;

    while (current) {
      const beginTail = prev,
            reverseTail = current;
      let times = k;

      // reverse k
      while (times && current) {
        const { next } = current;
        current.next = prev;
        prev = current;
        current = next;
        times--;
      }

      // stitch
      if (beginTail) {
        beginTail.next = prev;
      } else {
        head = prev;
      }
      reverseTail.next = current;
      prev = reverseTail;
      
      // advance k
      times = k;
      while (times && current) {
        prev = current;
        current = current.next;
        times--;
      }
    }

    return head;
  }
}
