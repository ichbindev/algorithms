/*
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/


class Solution {
  findMiddle(head) {
    let fast = head, slow = head;
    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}
