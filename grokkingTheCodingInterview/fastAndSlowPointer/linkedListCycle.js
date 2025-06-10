/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

// Given the head of a Singly LinkedList, write a function to determine 
// if the LinkedList has a cycle in it or not.

class Solution {
  hasCycle(head) {
    let fast = head, 
        slow = head;

    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) return true;
    }
    
    return false;
  }
}
