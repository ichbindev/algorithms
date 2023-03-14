export function semordnilap(words: string[]) {
  const result: string[][] = [];
  const wordSet = new Set();
  
  words.forEach(word => {
    const pair = reverse(word);
    if (wordSet.has(pair)) {
      result.push([word, pair]);
      wordSet.delete(word);
      wordSet.delete(pair);
    } else {
      wordSet.add(word);
    }
  });

  return result;
}

function reverse(s: string) {
  return s.split('').reverse().join('');
}