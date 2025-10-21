/*
Given a number 'n', implement a method to count how many possible ways there 
are to express 'n' as the sum of 1, 3, or 4.
*/

class Solution {

  countWays (n) {
    if (n < 3) return 1;
    if (n === 3) return 2;
    let m0 = 1,
        m1 = 1,
        m2 = 1,
        m3 = 2; 
    for (let i = 4; i <= n; i++) {
      const temp = m0 + m1 + m3;
      m0 = m1;
      m1 = m2;
      m2 = m3;
      m3 = temp;
    }
    return m3;
  }
}