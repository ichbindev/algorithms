/*
Given the head node of a singly linked list, modify the list 
such that any node that has a node with a greater value to its 
right gets removed. The function should return the head of the 
modified list.
*/

/*class ListNode {
  constructor(val=0, next=null) {
      this.val = val;
      this.next = next;
  }
}*/

class Solution {

  removeNodes(head) {
    // monotonic decreasing stack
    const stack = [];

    while (head) {
      const { val } = head;
      while (stack.length && val > stack[stack.length - 1]) {
        stack.pop();
      }
      // link the list while in the stack
      if (stack.length) stack[stack.length - 1].next = head;
      stack.push(head);
      head = head.next;
    }

    // end the list
    stack[stack.length - 1].next = null;
    // bottom of stack is new head
    return stack[0];
  }
}