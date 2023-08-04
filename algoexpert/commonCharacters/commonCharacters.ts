export function commonCharacters(strings: string[]) {
  // find shortest string
  // build set out of chars
  // for all other strings
    // for all chars in set
    // check if char in string
      // if not, remove from set
  // return set as array
  const commonChars = getSetFromShortestString(strings);
  for (let s of strings) {
    removeUncommonChars(s, commonChars);
  }
  
  // Write your code here.
  return Array.from(commonChars);
}

function getSetFromShortestString(strings: string[]): Set<string> {
  let shortest = strings[0];
  for (let s of strings) {
    if (s.length < shortest.length) {
      shortest = s;
    }
  }
  return new Set<string>(Array.from(shortest));
}

function removeUncommonChars(s: string, commonChars: Set<string>): void {
  for (let char of commonChars) {
    if (!s.includes(char)) {
      commonChars.delete(char);
    }
  }
}
