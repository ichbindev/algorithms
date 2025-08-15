// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let head = null,
      last = null;
  
  while (headOne || headTwo) {
    if (!headOne || headTwo?.value < headOne.value) {
      if (last) last.next = headTwo;
      last = headTwo;
      headTwo = headTwo.next;
    } else {
      if (last) last.next = headOne;
      last = headOne;
      headOne = headOne.next;
    }
    if (!head) head = last;
  }
  
  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
