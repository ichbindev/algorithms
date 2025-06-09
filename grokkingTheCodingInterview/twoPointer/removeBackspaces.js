// Given two strings containing backspaces (identified by the character ‘#’), 
// check if the two strings are equal.

class Solution {
  compare(str1, str2) {
    let p1 = str1.length,
        p2 = str2.length;

    while (p1 >= 0 || p2 >= 0) {
      p1 = this.updatePointer(p1, str1);
      p2 = this.updatePointer(p2, str2);
      if (p1 < 0 && p2 < 0) {
        return true;
      } else if (p1 < 0 || p2 < 0) {
        return false;
      }
      
      if (str1[p1] !== str2[p2]) return false;
      p1--;
      p2--;
    }

    return p1 === p2;
  }

  updatePointer(p, s) {
    let bs = 0;
    while (p >= 0) {
      if (s[p] === '#') {
        bs++;
      } else if (bs > 0) {
        bs--;
      } else {
        break;
      }

      p--;
    }

    return p;
  }
}
