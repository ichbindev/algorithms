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

// O(n) time where n is length of the linked list
// O(1) space, stores two pointers to list nodes
function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head?.next,
      slow: ListNode | null = head;
  
  while (fast) {
      fast = fast?.next?.next;
      slow = slow?.next;
  }
      
  return slow;
};