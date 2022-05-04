/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
function isValid(s: string): boolean {
    const open = '({[',
          openToClose = {
              '(': ')',
              '{': '}',
              '[': ']'
          },
          stack: string[] = [];
    
    for (let c of s) {
        if (open.includes(c)) {
            stack.push(c);
        } else {
            const openChar = stack.pop();
            if (openToClose[openChar] !== c) {
                return false;
            }
        }
    }
    
    return !stack.length;
};
