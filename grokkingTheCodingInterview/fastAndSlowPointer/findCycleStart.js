// Given the head of a Singly LinkedList that contains a cycle, 
// write a function to find the starting node of the cycle.

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  findCycleStart(head) {
    let fast = head, slow = head;
    
    // find where the pointers meet
    // fast traveled 2x slow, distance 2D and D respectively
    // let B be distance before cycle and C be cycle length
    //   splitting C into C1 (start of cycle to meeting point)
    //   and C2 (distance from meeting point to beginning of cycle)
    // so D = B + C1 and 2D = B + C1 + C2 + C1 or B + 2C1 + C2
    // 2D = 2B + 2C1 = B + 2C1 + C2, reduces to B = C2
    do {
      fast = fast.next.next;
      slow = slow.next;
    } while (fast !== slow);

    // reset slow pointer
    slow = head;

    // move both at the same speed, they meet again after 
    // B/C2 movements, aka where the cycle starts
    // (fast moves B + 2C1 + 2C2, exactly 2x thru cycle)
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }

    return fast;
  }
}
