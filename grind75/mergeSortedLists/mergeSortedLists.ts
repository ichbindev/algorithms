/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = new ListNode(),
      current = head;
  while (list1 || list2) {
      if (!list1) {
          current.next = list2;
          list2 = list2.next;
      } else if (!list2) {
          current.next = list1;
          list1 = list1.next;
      } else {
          if (list1.val < list2.val) {
              current.next = list1;
              list1 = list1.next;
          } else {
              current.next = list2;
              list2 = list2.next;
          }
      }
      current = current.next;
  }
  return head.next;
};
  