/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
class Solution {
  increment(map, item) {
    const count = map[item] || 0;
    map[item] = count + 1;
  }

  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sMap = {},
          tMap = {};
    for (let i = 0; i < s.length; i++) {
      this.increment(sMap, s[i]);
      this.increment(tMap, t[i]);
    }
    if (Object.keys(sMap).length !== Object.keys(tMap).length) return false;
    for (const key in sMap) {
      if (sMap[key] !== tMap[key]) return false;
    }
    return true;
  }
};
