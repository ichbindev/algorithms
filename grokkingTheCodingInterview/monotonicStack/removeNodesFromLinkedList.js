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

  buildList(stack) {
    const head = stack[0];
    for (let i = 0; i < stack.length; i++) {
      const next = stack[i + 1] || null;
      stack[i].next = next;
    }

    return head;
  }

  buildStack(head) {
    // monotonic decreasing stack
    const stack = [];
    while (head) {
      const { val } = head;
      while (stack.length && val > stack[stack.length - 1]) {
        stack.pop();
      }

      stack.push(head);
      head = head.next;
    }
    return stack;
  }

  removeNodes(head) {
    const stack = this.buildStack(head);
    const newHead = this.buildList(stack);
    return newHead;
  }
}