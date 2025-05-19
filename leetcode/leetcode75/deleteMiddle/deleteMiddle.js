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
  // find one node before the middle
  let lag = head,
      lead = head;
  
  // TODO: combine into one loop
  // even tho its still O(n) so who cares
  let size = 0;
  while (lead !== null) {
      size++;
      lead = lead.next;
  }
  for (let x = 0; x < Math.floor(size / 2) - 1; x++) {
      lag = lag.next;
  }
  
  // remove middle node by making the node before it
  // point to middle.next
  lag.next = lag.next?.next || null;
  return head;
};