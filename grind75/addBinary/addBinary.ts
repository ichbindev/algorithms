function addBinary(a: string, b: string): string {
  let result = '',
      carry = 0,
      index = 0;
  
  // reverse a and b since we add right to left
  // this will make dealing with differeing lengths easier
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  
  while (index < a.length || index < b.length) {
      const aDigit = Number.parseInt(a.charAt(index), 2) || 0;
      const bDigit = Number.parseInt(b.charAt(index), 2) || 0;
      const total = aDigit + bDigit + carry;
      result = total % 2 + result;
      carry = Math.floor(total / 2);
      ++index;
  }
  
  if (carry) {
      result = '1' + result;
  }
  
  
  return result;
};

