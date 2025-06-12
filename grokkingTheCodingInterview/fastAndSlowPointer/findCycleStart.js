// Given the head of a Singly LinkedList that contains a cycle, 
// write a function to find the starting node of the cycle.

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  findCycleStart(head) {
    let fast = head, slow = head;
    
    do {
      fast = fast.next.next;
      slow = slow.next;
    } while (fast !== slow);

    slow = head;

    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }

    return fast;
  }
}
