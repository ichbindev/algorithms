export function caesarCipherEncryptor(string: string, key: number) {
  const cipher = buildCipher(key % 26);
  const result = Array.from(string).reduce((acc, char) => {
    const cipherIndex = getIndexOf(char);
    return acc + cipher[cipherIndex];
  }, '')
  return result;
}

function buildCipher(shift: number): string[] {
  let a = 'a'.charCodeAt(0);
  let z = 'z'.charCodeAt(0);
  const alphabet: string[] = [];
  for (let i = a; i <= z; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet.slice(shift).concat(alphabet.slice(0, shift));
}

function getIndexOf(char: string): number {
  let a = 'a'.charCodeAt(0);
  let charCode = char.charCodeAt(0);
  return charCode - a;
}
