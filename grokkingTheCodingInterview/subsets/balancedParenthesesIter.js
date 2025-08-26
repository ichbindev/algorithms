/*
For a given number ‘N’, write a function to generate all combination of 
‘N’ pairs of balanced parentheses.

Constraints:
- 1 <= n <= 8
*/

class PString{
  constructor(str = '', open = 0, close = 0) {
    this.str = str;
    this.open = open;
    this.close = close;
  }

  toString() {
    return this.str;
  }
}
class Solution {
  generateValidParentheses(num) {
    const result = [],
          queue = [ new PString() ];
          
    while (queue.length) {
      const { str, open, close } = queue.shift();
      if (open === num && close === num) {
        result.push(str);
        continue;
      }
      // add open and close if we can
      if (open < num) {
        queue.push(new PString(str + '(', open + 1, close));
      } 
      if (open > close) {
        queue.push(new PString(str + ')', open, close + 1));
      }
    }

    return result;
  }

}
