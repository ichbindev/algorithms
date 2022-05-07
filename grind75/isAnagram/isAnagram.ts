/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  // convert both strings to {character: count} object
  const sHash = stringToHash(s), 
        tHash = stringToHash(t);

  // verify the objects have the same characters and counts
  for (let c in sHash) {
      if (sHash[c] !== tHash[c]) {
          return false;
      }
  }
  return true;
};

function stringToHash(s: string): {[key: string]: number} {
  const hash = {};
  for (let c of s) {
      if (!(c in hash)) {
          hash[c] = 0;
      }
      ++hash[c];
  }
  return hash;
}