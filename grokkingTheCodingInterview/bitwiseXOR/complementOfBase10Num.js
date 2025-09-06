/*
Every non-negative integer N has a binary representation, for example, 
8 can be represented as “1000” in binary and 7 as “0111” in binary.

The complement of a binary representation is the number in binary that 
we get when we change every 1 to a 0 and every 0 to a 1. For example, 
the binary complement of “1010” is “0101”.

For a given positive number N in base-10, return the complement of its 
binary representation as a base-10 integer.

Constraints:
- 1 <= n < 10^9
*/

// note: solution implies that we keep all leading 0s set to 0

class Solution{
  bitwiseComplement(num) {
    let lastSetBit = 0,
        numCopy = num;
    
    // find most significant bit set to 1
    while (numCopy) {
      lastSetBit++;
      numCopy >>= 1;
    }

    // 2 to that power - 1 sets that bit to 0 and everything after to 1
    const all1s = Math.pow(2, lastSetBit) - 1;
    return num ^ all1s;
  }
}
