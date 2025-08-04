// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let l1 = linkedListOne,
      l2 = linkedListTwo;
  while (l1 !== l2) {
    if (!l1) {
      l1 = linkedListTwo;
    } else {
      l1 = l1.next;
    }
    if (!l2) {
      l2 = linkedListOne;
    } else {
      l2 = l2.next;
    }
  }
  return l1;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
