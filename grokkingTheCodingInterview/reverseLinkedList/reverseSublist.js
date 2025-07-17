/*
Given the head of a LinkedList and two positions 
‘p’ and ‘q’, reverse the LinkedList from position 
‘p’ to ‘q’.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

// begin ->  reverse  -> end
//  <p   ->  p<=i<=q  ->  >q
class Solution {
  reverse(head, p, q) {
    let current = head,
        prev = null,
        position = 1;
    
    // advance to p and store boundaries
    while (current && position < p) {
      prev = current;
      current = current.next;
      ++position;
    }
    let beginTail = prev,
        reverseTail = current;

    // reverse until past q
    while (current && position <= q) {
      const { next } = current;
      current.next = prev;
      prev = current;
      current = next;
      ++position;
    }

    // stitch back together
    // endHead = current;
    // reverseHead = prev
    if (beginTail) beginTail.next = prev;
    reverseTail.next = current;

    // if we reverse starting at 1, reverseHead is the new head
    return p !== 1 ? head : prev;
  }
}
