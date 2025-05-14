// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head; // can use head as the var here but I feel this is more clear

  while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  return prev;
};