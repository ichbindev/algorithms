/*
For a given number ‘N’, write a function to generate all combination of 
‘N’ pairs of balanced parentheses.

Constraints:
- 1 <= n <= 8
*/
class Solution {
  generateValidParentheses(num) {
    const parens = Array.from({ length: num }, () => '()').join('');
    const result = new Set();
    this.doPermutations('', parens, result);
    return [...result];
  }

  doPermutations(done, remaining, result) {
    if (remaining === '') {
      result.add(done);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];
      const toDo = remaining.substring(0, i) + remaining.substring(i + 1);
      this.validateParens(done + char) && this.doPermutations(done + char, toDo, result);
    }
  }

  validateParens(str) {
    let count = 0;
    for (const c of str) {
      if (c === '(') count++;
      else count--;
      if (count < 0) return false;
    }
    return true;
  }
}
