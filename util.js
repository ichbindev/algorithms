// print a linked list w/ cycle detection
function print(head) {
  let out = '';
  const visited = new Set();
  while (head) {
    out += head.val;
    if (visited.has(head.val)) {
      out += ' CYCLE'
      break;
    }
    visited.add(head.val);
    if (head.next) out += ' -> '
    head = head.next;
  }
  console.log(out)
}