// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let shorter, longer;
  const l1length = getLength(linkedListOne);
  let l2length = getLength(linkedListTwo);
  if (l1length > l2length) {
    longer = linkedListOne;
    shorter = linkedListTwo;
  } else {
    longer = linkedListTwo;
    shorter = linkedListOne;
  }

  const shorterNodes = new Set();
  const sHead = shorter;
  while (shorter) {
    shorterNodes.add(shorter);
    shorter = shorter.next;
  }
  let size = Math.max(l1length, l2length);
  while (size--) {
    if (shorterNodes.has(longer)) return longer;
    longer = longer.next;
  }
  return null;
}

function getLength(node) {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
