/*

  Write a function that takes in the head of a Singly Linked List that contains
  a loop (in other words, the list's tail node points to some node in the list
  instead of `None` / `null`). The function should return
  the node (the actual node--not just its value) from which the loop originates
  in constant space.

  Each `LinkedList` node has an integer `value` as well as
  a `next` node pointing to the next node in the list.

*/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let lag = head;
  let lead = head;

  // lag travels X, lead travels 2X
  // let D = list length before loop, 
  // let A = length after loop start to current node
  // lag traveled D + A, lead traveled 2D + 2A
  do {
    lag = lag.next;
    lead = lead.next.next;
  } while (lag !== lead)

  // let R = the distance remaining in the loop
  // let T = total # of nodes in list
  // so lead has traveled T + A = 2D + 2A, and T = 2D + A
  // and R = T - D - A, or R = 2D + A - D - A, or R = D
  // so start lag over at head and advance lead at same rate
  // they will move R or D times and meet where the loop starts
  lag = head;
  while (lag !== lead) {
    lag = lag.next;
    lead = lead.next;
  }
  return lag;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;
