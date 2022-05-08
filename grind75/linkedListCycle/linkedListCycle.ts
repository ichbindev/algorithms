/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function hasCycle(head: ListNode | null): boolean {
  let slow = head,
      fast = head;
  
  let counter = 0;
  while (fast !== null) {
      fast = fast.next;
      if (counter & 1) {
          slow = slow.next;
      }
      ++counter;
      if (slow === fast) {
          return true;
      }
  }
  return false;
};