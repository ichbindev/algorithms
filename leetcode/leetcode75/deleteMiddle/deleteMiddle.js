/*
    You are given the head of a linked list. Delete the middle node, 
    and return the head of the modified linked list.

    The middle node of a linked list of size n is the ⌊n / 2⌋th node 
    from the start using 0-based indexing, where ⌊x⌋ denotes the largest 
    integer less than or equal to x.

    For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

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
var deleteMiddle = function(head) {
  if (!head.next) return null;

  // find the middle node
  let lag = head,
      lead = head;
  
  while (lead && lead.next) {
      lag = lag.next;
      lead = lead.next.next;
  }

  // to delete the middle node, we need to
  // find the node before the middle node
  let current = head,
      previous = null;

  while (current != lag) {
      previous = current;
      current = current.next;
  }
  
  // remove middle node by making the previous
  // node's next point to middle.next
  previous.next = current.next;
  return head;
};