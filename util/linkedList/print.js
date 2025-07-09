// print a linked list w/ optional cycle detection
// uses O(n) space for cycle detection
// will stop after 50 by default, manual verification isn't 
//  useful for lists that big and you probably have a cycle
function print(head, checkCycle = false, maxPrint = 50) {
  let out = '',
      printed = 0;
  const visited = new Set();
  while (head && printed < maxPrint) {
    out += head.val;
    if (checkCycle) {
      if (visited.has(head.val)) {
        out += ' CYCLE'
        break;
      }
      visited.add(head.val);
    }
    if (head.next) out += ' -> '
    head = head.next;
    printed++;
  }
  console.log(out)
}