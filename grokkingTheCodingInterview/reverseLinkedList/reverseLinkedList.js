/*
Given the head of a Singly LinkedList, reverse 
the LinkedList. Write a function to return the 
new head of the reversed LinkedList.
*/

 /*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
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
