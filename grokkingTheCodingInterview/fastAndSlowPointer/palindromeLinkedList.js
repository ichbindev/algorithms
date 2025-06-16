/*
Given the head of a Singly LinkedList, write a method to 
check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList 
should be in the original form once the algorithm is finished. The 
algorithm should have O(N) time complexity where ‘N’ is the number 
of nodes in the LinkedList.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  isPalindrome(head) {
    const middle = this.findMiddleNode(head);
    const newMiddle = this.reverseFrom(middle);
    const isPalindrome = this.isListEqual(head, newMiddle);
    this.reverseFrom(newMiddle);
    return isPalindrome;
  }

  isListEqual(node1, node2) {
    while (node1 && node2) {
      if (node1.val !== node2.val) {
        return false;
      }
      node1 = node1.next;
      node2 = node2.next;
    }
    return true;
  }

  findMiddleNode(head) {
    let fast = head, slow = head;

    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  reverseFrom(current) {
    let previous = null;

    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    
    return previous;
  }
}
